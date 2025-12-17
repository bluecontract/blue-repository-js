import type { BlueRepositoryPackage } from '../repositoryTypesBuilder/index.js';
import { toIdentifier } from '../identifier.js';
import { RESERVED_KEYS } from './constants.js';
import {
  getItemTypeNode,
  getRefBlueId,
  getValueTypeNode,
  hasInlineShape,
  indentBlock,
  normalizeAliasString,
  pathToString,
} from './helpers.js';
import {
  renderSchemaFile,
  renderSchemasBarrelFile,
  renderSchemasIndexFile,
} from './templateRenderer.js';
import type { RepoContext, TypeInfo } from './types.js';
import { UnknownTypeReferenceError } from './types.js';

type CompiledSchema = { expr: string; usesZ: boolean; usesBlueNode: boolean };
type CompiledFields = {
  shape: string;
  usesZ: boolean;
  usesBlueNode: boolean;
  fieldCount: number;
};
type ResolvedBase =
  | { kind: 'primitive'; blueId: string; primitive: string }
  | { kind: 'list'; blueId: string }
  | { kind: 'dictionary'; blueId: string }
  | { kind: 'type'; blueId: string; safeName: string; importPath: string }
  | null;

export class PackageSchemaBuilder {
  private readonly types: TypeInfo[];
  private readonly perTypeFiles: Record<string, string> = {};
  private readonly schemaImports: string[] = [];
  private readonly schemaEntries: string[] = [];
  private currentType: TypeInfo | null = null;

  constructor(
    private readonly packageName: string,
    _pkg: BlueRepositoryPackage,
    private readonly ctx: RepoContext,
  ) {
    this.types = [...ctx.typeIndex.values()].filter(
      (t) => t.packageName === packageName,
    );
    this.types.sort((a, b) => a.typeName.localeCompare(b.typeName));
  }

  build() {
    for (const info of this.types) {
      this.currentType = info;
      const safeName = toIdentifier(info.typeName, info.blueId);
      const fileContent = this.emitTypeFile(info, safeName);
      this.perTypeFiles[`packages/${this.packageName}/schemas/${safeName}.ts`] =
        fileContent;
      this.schemaImports.push(`import { ${safeName}Schema } from './${safeName}';`);
      this.schemaEntries.push(`'${info.blueId}': ${safeName}Schema`);
      this.currentType = null;
    }

    const schemaIndexTs = this.emitIndexFile();
    const schemasTs = renderSchemasBarrelFile();

    return {
      perTypeFiles: this.perTypeFiles,
      schemaIndexTs,
      schemasTs,
    };
  }

  private emitTypeFile(info: TypeInfo, safeName: string): string {
    const depImports = new Set<string>();

    const base = this.resolveBase(info);
    this.addBaseSchemaImport(depImports, base);

    const fieldResults = this.compileFields(info.content, depImports, []);
    const schema = this.buildRootSchema(info, base, depImports, fieldResults);
    const baseSchemaExpression = schema.needsZodObjectCast
      ? `${schema.baseSchema} as unknown as z.ZodObject<any>`
      : schema.baseSchema;

    return renderSchemaFile({
      schemaName: safeName,
      blueIdsKey: this.aliasFor(info),
      usesBlueNode: schema.usesBlueNode,
      schemaImports: this.groupSchemaImports(depImports),
      schemaExpressionIndented: indentBlock(baseSchemaExpression, 2),
    });
  }

  private addBaseSchemaImport(imports: Set<string>, base: ResolvedBase) {
    if (base?.kind !== 'type' || !base.importPath) {
      return;
    }
    imports.add(`import { ${base.safeName}Schema } from '${base.importPath}';`);
  }

  private buildRootSchema(
    info: TypeInfo,
    base: ResolvedBase,
    imports: Set<string>,
    fieldResults: CompiledFields,
  ): { baseSchema: string; usesBlueNode: boolean; needsZodObjectCast: boolean } {
    if (base?.kind === 'primitive') {
      this.assertNoExtraFields(fieldResults, info, `primitive '${base.blueId}'`);
      return {
        baseSchema: this.primitiveSchema(base.primitive),
        usesBlueNode: false,
        needsZodObjectCast: true,
      };
    }

    if (base?.kind === 'list') {
      this.assertNoExtraFields(fieldResults, info, 'List');
      const itemSchema = this.compileRootListItemSchema(info, imports);
      return {
        baseSchema: `z.array(${itemSchema.expr})`,
        usesBlueNode: fieldResults.usesBlueNode || itemSchema.usesBlueNode,
        needsZodObjectCast: true,
      };
    }

    if (base?.kind === 'dictionary') {
      this.assertNoExtraFields(fieldResults, info, 'Dictionary');
      const valueSchema = this.compileRootDictionaryValueSchema(info, imports);
      return {
        baseSchema: `z.object({}).catchall(${valueSchema.expr})`,
        usesBlueNode: fieldResults.usesBlueNode || valueSchema.usesBlueNode,
        needsZodObjectCast: false,
      };
    }

    if (base?.kind === 'type') {
      return {
        baseSchema: `${base.safeName}Schema.extend(${fieldResults.shape})`,
        usesBlueNode: fieldResults.usesBlueNode,
        needsZodObjectCast: false,
      };
    }

    return {
      baseSchema: `z.object(${fieldResults.shape})`,
      usesBlueNode: fieldResults.usesBlueNode,
      needsZodObjectCast: false,
    };
  }

  private assertNoExtraFields(
    fieldResults: CompiledFields,
    info: TypeInfo,
    baseDescription: string,
  ) {
    if (fieldResults.fieldCount === 0) {
      return;
    }

    if (baseDescription.startsWith('primitive')) {
      throw new Error(
        `Type '${info.typeName}' in package '${this.packageName}' cannot extend ${baseDescription} with additional fields`,
      );
    }

    throw new Error(
      `${baseDescription}-root type '${info.typeName}' in package '${this.packageName}' must not declare additional fields`,
    );
  }

  private compileRootListItemSchema(info: TypeInfo, imports: Set<string>): CompiledSchema {
    const itemNode = getItemTypeNode(info.content);
    return itemNode
      ? this.compileFieldValue(
          itemNode as Record<string, unknown>,
          imports,
          ['itemType'],
          0,
        )
      : this.blueNodeFallback();
  }

  private compileRootDictionaryValueSchema(
    info: TypeInfo,
    imports: Set<string>,
  ): CompiledSchema {
    const valueNode = getValueTypeNode(info.content);
    return valueNode
      ? this.compileFieldValue(
          valueNode as Record<string, unknown>,
          imports,
          ['valueType'],
          0,
        )
      : this.blueNodeFallback();
  }

  private groupSchemaImports(
    depImports: ReadonlySet<string>,
  ): Array<{ importPath: string; typeNames: string[] }> {
    const byPath = new Map<string, Set<string>>();
    for (const statement of depImports) {
      const match = statement
        .trim()
        .match(/^import\s+\{\s*([^}]+?)\s*\}\s+from\s+['"]([^'"]+)['"];\s*$/);
      if (!match) {
        throw new Error(`Unsupported schema import format: ${statement}`);
      }
      const rawNames = match[1] ?? '';
      const importPath = match[2] ?? '';
      const names = rawNames
        .split(',')
        .map((name) => name.trim())
        .filter(Boolean);

      const existing = byPath.get(importPath) ?? new Set<string>();
      for (const name of names) {
        existing.add(name);
      }
      byPath.set(importPath, existing);
    }

    return [...byPath.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([importPath, names]) => ({
        importPath,
        typeNames: [...names].sort((a, b) => a.localeCompare(b)),
      }));
  }

  private emitIndexFile(): string {
    const schemaExports = this.types.map((t) => {
      const safeName = toIdentifier(t.typeName, t.blueId);
      return `export { ${safeName}Schema } from './${safeName}';`;
    });

    return renderSchemasIndexFile({
      schemaImports: this.schemaImports,
      schemaExports,
      schemaEntries: this.schemaEntries,
    });
  }

  private compileFields(
    content: Record<string, unknown>,
    imports: Set<string>,
    path: string[],
    indent = 0,
  ): CompiledFields {
    const entries: string[] = [];
    let usesZ = false;
    let usesBlueNode = false;
    let fieldCount = 0;

    const sortedKeys = Object.keys(content || {}).sort((a, b) => a.localeCompare(b));
    for (const key of sortedKeys) {
      const value = (content as any)[key];
      if (key === 'name' && typeof value === 'string') {
        entries.push(`${this.formatObjectKey(key)}: z.string().optional()`);
        usesZ = true;
        continue;
      }

      if (key === 'description' && typeof value === 'string') {
        entries.push(`${this.formatObjectKey(key)}: z.string().optional()`);
        usesZ = true;
        continue;
      }

      if (RESERVED_KEYS.has(key)) {
        continue;
      }
      const fieldPath = [...path, key];
      const fieldSchema = this.compileProperty(
        value as Record<string, unknown>,
        imports,
        fieldPath,
        indent + 2,
      );
      usesZ = usesZ || fieldSchema.usesZ;
      usesBlueNode = usesBlueNode || fieldSchema.usesBlueNode;
      fieldCount++;
      entries.push(`${this.formatObjectKey(key)}: ${fieldSchema.expr}`);
    }

    const pad = ' '.repeat(indent);
    const childPad = ' '.repeat(indent + 2);
    const shape =
      entries.length === 0
        ? '{}'
        : `{\n${childPad}${entries.join(`,\n${childPad}`)}\n${pad}}`;
    return { shape, usesZ, usesBlueNode, fieldCount };
  }

  private formatObjectKey(key: string): string {
    // Prefer unquoted keys for readability when they are valid identifiers.
    // Fall back to a quoted literal for keys that contain spaces/symbols.
    return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? key : JSON.stringify(key);
  }

  private compileProperty(
    def: Record<string, unknown>,
    imports: Set<string>,
    path: string[],
    indent: number,
  ): CompiledSchema {
    const compiled = this.compileFieldValue(def, imports, path, indent);
    return {
      expr: `${compiled.expr}.optional()`,
      usesZ: compiled.usesZ,
      usesBlueNode: compiled.usesBlueNode,
    };
  }

  private compileFieldValue(
    def: Record<string, unknown>,
    imports: Set<string>,
    path: string[],
    indent: number,
  ): CompiledSchema {
    const resolved = this.resolveRef(def);
    if (resolved) {
      return this.compileReferencedSchema(def, imports, path, indent, resolved);
    }

    if (hasInlineShape(def)) {
      return this.compileInlineObjectSchema(def, imports, path, indent);
    }

    return this.blueNodeFallback();
  }

  private resolveRef(
    def: Record<string, unknown>,
  ): { refRaw: string; refBlueId: string } | null {
    const refRaw = getRefBlueId(def);
    if (!refRaw) {
      return null;
    }
    const refBlueId = this.resolveBlueId(refRaw);
    if (!refBlueId) {
      return null;
    }
    return { refRaw, refBlueId };
  }

  private compileReferencedSchema(
    def: Record<string, unknown>,
    imports: Set<string>,
    path: string[],
    indent: number,
    resolved: { refRaw: string; refBlueId: string },
  ): CompiledSchema {
    const primitive = this.ctx.primitiveKindByBlueId.get(resolved.refBlueId);
    if (primitive) {
      return this.compilePrimitiveSchema(primitive);
    }

    const collection = this.ctx.collectionKindByBlueId.get(resolved.refBlueId);
    if (collection === 'list') {
      return this.compileListSchema(def, imports, path, indent);
    }
    if (collection === 'dictionary') {
      return this.compileDictionarySchema(def, imports, path, indent);
    }

    return this.compileTypeSchemaReference(
      resolved.refRaw,
      resolved.refBlueId,
      imports,
      path,
    );
  }

  private compilePrimitiveSchema(kind: string): CompiledSchema {
    return { expr: this.primitiveSchema(kind), usesZ: true, usesBlueNode: false };
  }

  private compileListSchema(
    def: Record<string, unknown>,
    imports: Set<string>,
    path: string[],
    indent: number,
  ): CompiledSchema {
    const itemNode = getItemTypeNode(def);
    const itemSchema = itemNode
      ? this.compileFieldValue(
          itemNode as Record<string, unknown>,
          imports,
          [...path, 'itemType'],
          indent + 2,
        )
      : this.blueNodeFallback();
    return {
      expr: `z.array(${itemSchema.expr})`,
      usesZ: true,
      usesBlueNode: itemSchema.usesBlueNode,
    };
  }

  private compileDictionarySchema(
    def: Record<string, unknown>,
    imports: Set<string>,
    path: string[],
    indent: number,
  ): CompiledSchema {
    const valueNode = getValueTypeNode(def);
    const valueSchema = valueNode
      ? this.compileFieldValue(
          valueNode as Record<string, unknown>,
          imports,
          [...path, 'valueType'],
          indent + 2,
        )
      : this.blueNodeFallback();
    return {
      expr: `z.record(z.string(), ${valueSchema.expr})`,
      usesZ: true,
      usesBlueNode: valueSchema.usesBlueNode,
    };
  }

  private compileTypeSchemaReference(
    refRaw: string,
    refBlueId: string,
    imports: Set<string>,
    path: string[],
  ): CompiledSchema {
    const target = this.ctx.typeIndex.get(refBlueId);
    if (!target) {
      return this.throwUnknownType(refRaw, path);
    }

    const safe = toIdentifier(target.typeName, target.blueId);
    imports.add(this.schemaImportFor(target.packageName, safe));
    return { expr: `${safe}Schema`, usesZ: false, usesBlueNode: false };
  }

  private schemaImportFor(packageName: string, safeName: string): string {
    if (packageName === this.packageName) {
      return `import { ${safeName}Schema } from './${safeName}';`;
    }
    return `import { ${safeName}Schema } from '../../${packageName}/schemas/${safeName}';`;
  }

  private compileInlineObjectSchema(
    def: Record<string, unknown>,
    imports: Set<string>,
    path: string[],
    indent: number,
  ): CompiledSchema {
    const nested = this.compileFields(def as Record<string, unknown>, imports, path, indent + 2);
    return {
      expr: `z.object(${nested.shape})`,
      usesZ: true,
      usesBlueNode: nested.usesBlueNode,
    };
  }

  private blueNodeFallback(): CompiledSchema {
    return { expr: 'blueNodeField()', usesZ: false, usesBlueNode: true };
  }

  private primitiveSchema(kind: string): string {
    switch (kind) {
      case 'text':
        return 'z.string()';
      case 'integer':
        return 'z.number()';
      case 'double':
        return 'z.number()';
      case 'boolean':
        return 'z.boolean()';
      default:
        return this.throwUnknownType(kind, []);
    }
  }

  private throwUnknownType(ref: string, path: string[]): never {
    const typeInfo = this.currentType;
    throw new UnknownTypeReferenceError({
      fromType: typeInfo?.typeName ?? '<unknown>',
      fromPackage: this.packageName,
      atPath: pathToString(path),
      ref,
    });
  }

  private resolveBase(
    info: TypeInfo,
  ): ResolvedBase {
    const rawRef = getRefBlueId((info.content as any)?.type);
    if (!rawRef) {
      return null;
    }
    const baseId = this.resolveBlueId(rawRef);
    if (!baseId) {
      return this.throwUnknownType(rawRef, ['type']);
    }

    const primitive = this.ctx.primitiveKindByBlueId.get(baseId);
    if (primitive) {
      return { kind: 'primitive', blueId: baseId, primitive };
    }
    const collection = this.ctx.collectionKindByBlueId.get(baseId);
    if (collection === 'list') {
      return { kind: 'list', blueId: baseId };
    }
    if (collection === 'dictionary') {
      return { kind: 'dictionary', blueId: baseId };
    }

    const base = this.ctx.typeIndex.get(baseId);
    if (!base) {
      this.throwUnknownType(rawRef, ['type']);
    }
    const safe = toIdentifier(base.typeName, base.blueId);
    const importPath =
      base.packageName === this.packageName
        ? `./${safe}`
        : `../../${base.packageName}/schemas/${safe}`;
    return { kind: 'type', blueId: baseId, safeName: safe, importPath };
  }

  private resolveBlueId(ref: string): string | undefined {
    const aliasKey = normalizeAliasString(ref);
    const alias =
      this.ctx.aliasToBlueId.get(aliasKey) ?? this.ctx.aliasToBlueId.get(ref);
    if (alias) {
      return this.normalizeBlueId(alias);
    }
    return this.normalizeBlueId(ref);
  }

  private aliasFor(info: TypeInfo): string {
    return `${info.packageDisplayName}/${info.typeName}`;
  }

  private normalizeBlueId(blueId: string): string {
    if (this.ctx.toCurrent.has(blueId)) {
      return this.ctx.toCurrent.get(blueId)!;
    }
    return blueId;
  }
}

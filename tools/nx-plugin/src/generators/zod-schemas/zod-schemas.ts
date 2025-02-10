import { formatFiles, readProjectConfiguration, Tree } from '@nx/devkit';
import * as path from 'path';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { ZodSchemasGeneratorOptions } from './schema';
import { transformToPackageName } from '../../utils/transformToPackageName';
import { pascal } from '../../utils/pascal';
interface BlueField {
  type: { blueId: string };
  description?: string;
  itemType?: { blueId: string };
  keyType?: { blueId: string };
  valueType?: { blueId: string };
}

interface BlueType {
  name: string;
  description?: string;
  [key: string]: any; // To allow for nested fields
}

interface BlueIdInfo {
  typeName: string;
  moduleName: string;
}

interface BlueIds {
  [typeName: string]: string;
}

interface ModuleBlueIds {
  [blueId: string]: BlueIdInfo;
}

const PRIMITIVE_TYPE_MAP: Record<string, string> = {
  F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP: 'string', // TEXT
  '68ryJtnmui4j5rCZWUnkZ3DChtmEb7Z9F8atn1mBSM3L': 'number', // DOUBLE
  DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8: 'number', // INTEGER
  EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo: 'boolean', // BOOLEAN
  G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB: 'array', // LIST
  '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA': 'record', // DICTIONARY
};

function readYamlFile(filePath: string): any {
  return yaml.load(fs.readFileSync(filePath, 'utf8'));
}

function readExtendsFile(modulePath: string): string | null {
  const extendsPath = path.join(
    modulePath.replace('blue-preprocessed', 'blue-repository'),
    '_extends.txt'
  );
  if (fs.existsSync(extendsPath)) {
    const content = fs.readFileSync(extendsPath, 'utf8').trim();
    return content === 'ROOT' ? null : content;
  }
  return null;
}

function getModulePath(baseDir: string, moduleName: string): string {
  return path.join(baseDir, '..', moduleName);
}

function getAllBlueIds(
  modulePath: string,
  processedModules = new Set<string>()
): ModuleBlueIds {
  if (processedModules.has(modulePath)) {
    return {};
  }
  processedModules.add(modulePath);

  const blueIds: ModuleBlueIds = {};
  const currentModuleName = path.basename(modulePath);

  // Read current module's blue-ids
  const blueIdsPath = path.join(modulePath, 'blue-ids.yaml');
  if (fs.existsSync(blueIdsPath)) {
    const blueIdsYaml = readYamlFile(blueIdsPath) as BlueIds;
    for (const [typeName, blueId] of Object.entries(blueIdsYaml)) {
      blueIds[blueId] = { typeName, moduleName: currentModuleName };
    }
  }

  // Check for parent module
  const parentModule = readExtendsFile(modulePath);
  if (parentModule) {
    const parentPath = getModulePath(modulePath, parentModule);
    const parentBlueIds = getAllBlueIds(parentPath, processedModules);
    // Only add parent IDs if they don't exist in current module
    for (const [blueId, info] of Object.entries(parentBlueIds)) {
      if (!(blueId in blueIds)) {
        blueIds[blueId] = info;
      }
    }
  }

  return blueIds;
}

function getTypeNameFromBlueId(
  blueIds: ModuleBlueIds,
  typeId: string
): BlueIdInfo | undefined {
  return blueIds[typeId];
}

function generateImportPath(
  currentModule: string,
  typeInfo: BlueIdInfo
): string {
  if (typeInfo.moduleName === currentModule) {
    return `./${pascal(typeInfo.typeName)}`;
  }
  return `@blue-repository/${transformToPackageName(typeInfo.moduleName)}`;
}

function generateZodType(
  field: BlueField,
  blueIds: ModuleBlueIds,
  imports: Map<string, string>,
  currentModule: string
): string {
  const typeId = field.type.blueId;
  let zodType = 'z.unknown()';

  if (PRIMITIVE_TYPE_MAP[typeId]) {
    const primitiveType = PRIMITIVE_TYPE_MAP[typeId];
    if (primitiveType === 'array') {
      if (field.itemType) {
        const itemTypeId = field.itemType.blueId;
        if (PRIMITIVE_TYPE_MAP[itemTypeId]) {
          zodType = `z.array(z.${PRIMITIVE_TYPE_MAP[itemTypeId]}())`;
        } else {
          const itemTypeInfo = getTypeNameFromBlueId(blueIds, itemTypeId);
          if (itemTypeInfo) {
            const schemaName = pascal(itemTypeInfo.typeName);
            const importPath = generateImportPath(currentModule, itemTypeInfo);
            imports.set(schemaName, importPath);
            zodType = `z.array(${schemaName}Schema)`;
          } else {
            zodType = 'z.array(z.unknown())';
          }
        }
      } else {
        zodType = 'z.array(z.unknown())';
      }
    } else if (primitiveType === 'record') {
      // Handle key type
      let keyZodType = 'z.string()';
      if (field.keyType) {
        const keyTypeId = field.keyType.blueId;
        if (PRIMITIVE_TYPE_MAP[keyTypeId]) {
          keyZodType = `z.${PRIMITIVE_TYPE_MAP[keyTypeId]}()`;
        } else {
          const keyTypeInfo = getTypeNameFromBlueId(blueIds, keyTypeId);
          if (keyTypeInfo) {
            const schemaName = pascal(keyTypeInfo.typeName);
            const importPath = generateImportPath(currentModule, keyTypeInfo);
            imports.set(schemaName, importPath);
            keyZodType = `${schemaName}Schema`;
          }
        }
      }

      // Handle value type
      let valueZodType = 'z.unknown()';
      if (field.valueType) {
        const valueTypeId = field.valueType.blueId;
        if (PRIMITIVE_TYPE_MAP[valueTypeId]) {
          valueZodType = `z.${PRIMITIVE_TYPE_MAP[valueTypeId]}()`;
        } else {
          const valueTypeInfo = getTypeNameFromBlueId(blueIds, valueTypeId);
          if (valueTypeInfo) {
            const schemaName = pascal(valueTypeInfo.typeName);
            const importPath = generateImportPath(currentModule, valueTypeInfo);
            imports.set(schemaName, importPath);
            valueZodType = `${schemaName}Schema`;
          }
        }
      }

      zodType = `z.record(${keyZodType}, ${valueZodType})`;
    } else {
      zodType = `z.${primitiveType}()`;
    }
  } else {
    const typeInfo = getTypeNameFromBlueId(blueIds, typeId);
    if (typeInfo) {
      const schemaName = pascal(typeInfo.typeName);
      const importPath = generateImportPath(currentModule, typeInfo);
      imports.set(schemaName, importPath);
      zodType = `${schemaName}Schema`;
    }
  }

  return zodType + '.optional()';
}

function isNumericKeysObject(obj: any): boolean {
  if (typeof obj !== 'object' || obj === null) return false;
  const keys = Object.keys(obj);
  return (
    keys.length > 0 &&
    keys.every((key) => !isNaN(Number(key)) && Number.isInteger(Number(key)))
  );
}

function processTupleItems(
  items: any,
  blueIds: ModuleBlueIds,
  imports: Map<string, string>,
  indent: number,
  currentModule: string
): string {
  const indentation = '  '.repeat(indent);
  const tupleItems: string[] = [];
  const sortedKeys = Object.keys(items)
    .map(Number)
    .sort((a, b) => a - b);

  for (const key of sortedKeys) {
    const value = items[key];
    if (
      value &&
      typeof value === 'object' &&
      'type' in value &&
      value.type &&
      typeof value.type === 'object' &&
      'blueId' in value.type
    ) {
      // Direct schema reference
      const zodType = generateZodType(
        value as BlueField,
        blueIds,
        imports,
        currentModule
      );
      tupleItems.push(zodType.replace('.optional()', '')); // Remove optional for tuple items
    } else {
      // Nested object
      const nestedFields = processFields(
        value,
        blueIds,
        imports,
        indent + 1,
        currentModule
      );
      if (nestedFields.length > 0) {
        tupleItems.push(
          `z.object({\n${nestedFields.join(',\n')}\n${indentation}})`
        );
      }
    }
  }

  return `z.tuple([${tupleItems.join(', ')}])`;
}

function formatFieldKey(key: string): string {
  return key.includes(' ') ? `['${key}']` : key;
}

function processFields(
  obj: any,
  blueIds: ModuleBlueIds,
  imports: Map<string, string>,
  indent = 1,
  currentModule: string
): string[] {
  const fields: string[] = [];
  const indentation = '  '.repeat(indent);

  // Handle name and description fields first if they exist
  if ('name' in obj && typeof obj.name === 'string') {
    fields.push(`${indentation}name: z.string().optional()`);
  }
  if ('description' in obj && typeof obj.description === 'string') {
    fields.push(`${indentation}description: z.string().optional()`);
  }

  for (const [key, value] of Object.entries(obj)) {
    if (key === 'name' || key === 'description') continue;

    if (typeof value === 'object' && value !== null) {
      // Check if this is an object with only an 'items' field that contains a tuple
      if (
        Object.keys(value).length === 1 &&
        'items' in value &&
        isNumericKeysObject(value.items)
      ) {
        // Lift up the tuple and use the parent key
        const tupleType = processTupleItems(
          value.items,
          blueIds,
          imports,
          indent,
          currentModule
        );
        fields.push(
          `${indentation}${formatFieldKey(key)}: ${tupleType}.optional()`
        );
      } else if (
        value &&
        typeof value === 'object' &&
        'type' in value &&
        value.type &&
        typeof value.type === 'object' &&
        'blueId' in value.type
      ) {
        // This is a field definition
        const zodType = generateZodType(
          value as BlueField,
          blueIds,
          imports,
          currentModule
        );
        fields.push(`${indentation}${formatFieldKey(key)}: ${zodType}`);
      } else {
        // This is a nested object
        const nestedFields = processFields(
          value,
          blueIds,
          imports,
          indent + 1,
          currentModule
        );
        if (nestedFields.length > 0) {
          fields.push(
            `${indentation}${formatFieldKey(
              key
            )}: z.object({\n${nestedFields.join(
              ',\n'
            )}\n${indentation}}).optional()`
          );
        }
      }
    }
  }

  return fields;
}

function generateZodSchema(
  type: BlueType,
  blueIds: ModuleBlueIds,
  currentModule: string
): {
  schemaContent: string;
  imports: Map<string, string>;
} {
  const imports = new Map<string, string>();
  const fields = processFields(type, blueIds, imports, 1, currentModule);

  const schemaName = pascal(type.name);
  const schemaContent = `import { z } from 'zod';\n`;

  // Add withTypeBlueId import
  const importStatements = [
    `import { withTypeBlueId } from '@blue-company/language';`,
    `import { blueIds } from '../blue-ids';`,
  ];

  // Group imports by path
  const importsByPath = new Map<string, Set<string>>();
  imports.forEach((path, name) => {
    const existingSet = importsByPath.get(path) ?? new Set<string>();
    existingSet.add(name);
    importsByPath.set(path, existingSet);
  });

  // Add grouped imports
  importStatements.push(
    ...Array.from(importsByPath.entries()).map(([path, names]) => {
      const sortedNames = Array.from(names).sort();
      if (sortedNames.length === 1) {
        return `import { ${sortedNames[0]}Schema } from '${path}';`;
      }
      return `import {\n  ${sortedNames
        .map((name) => `${name}Schema`)
        .join(',\n  ')},\n} from '${path}';`;
    })
  );

  const blueIdKey = pascal(type.name);

  return {
    schemaContent: `${schemaContent}${importStatements.join(
      '\n'
    )}\n\nexport const ${schemaName}Schema = withTypeBlueId(blueIds.${blueIdKey})(\n  z.object({\n${fields.join(
      ',\n'
    )}\n  })\n);\n\nexport type ${schemaName} = z.infer<typeof ${schemaName}Schema>;\n`,
    imports,
  };
}

function ensureDirectoryExists(tree: Tree, dirPath: string) {
  if (!tree.exists(dirPath)) {
    tree.write(dirPath + '/.gitkeep', '');
  }
}

export async function zodSchemasGenerator(
  tree: Tree,
  options: ZodSchemasGeneratorOptions
) {
  const projectConfig = readProjectConfiguration(tree, options.libraryName);
  const schemasDir = path.join(projectConfig.root, 'src/schema');
  const currentModule = path.basename(options.inputPath);

  // Ensure the schema directory exists
  ensureDirectoryExists(tree, schemasDir);

  // Get all blue IDs including from parent modules
  const blueIds = getAllBlueIds(options.inputPath);

  // Read all .blue files
  const blueFiles = fs
    .readdirSync(options.inputPath)
    .filter((file) => file.endsWith('.blue'));

  // Generate individual schema files and collect exports
  const exports: string[] = [];
  const generatedSchemas = new Map<
    string,
    { content: string; imports: Map<string, string> }
  >();

  for (const file of blueFiles) {
    if (file === 'package.blue') continue;

    const type = readYamlFile(path.join(options.inputPath, file)) as BlueType;
    const schemaName = pascal(type.name);
    const { schemaContent, imports } = generateZodSchema(
      type,
      blueIds,
      currentModule
    );

    generatedSchemas.set(schemaName, { content: schemaContent, imports });
    exports.push(schemaName);
  }

  // Write individual schema files
  for (const [schemaName, { content }] of generatedSchemas) {
    const filePath = path.join(schemasDir, `${schemaName}.ts`);
    tree.write(filePath, content);
  }

  // Generate and write index file
  const indexContent =
    exports.map((name) => `export * from './${name}';`).join('\n') + '\n';

  tree.write(path.join(schemasDir, 'index.ts'), indexContent);

  if (!options.skipFormat) {
    await formatFiles(tree);
  }

  return () => {
    console.log('zodSchemasGenerator completed');
  };
}

export default zodSchemasGenerator;

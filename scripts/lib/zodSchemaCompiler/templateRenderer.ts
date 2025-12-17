import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

type EjsModule = {
  render: (template: string, data: Record<string, unknown>, options?: any) => string;
};

const require = createRequire(import.meta.url);
const ejs = require('ejs') as EjsModule;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatesDir = path.join(__dirname, 'templates');
const schemaTemplatePath = path.join(templatesDir, 'schema.ts.ejs');
const indexTemplatePath = path.join(templatesDir, 'index.ts.ejs');
const schemasTemplatePath = path.join(templatesDir, 'schemas.ts.ejs');

let schemaTemplateCache: string | null = null;
let indexTemplateCache: string | null = null;
let schemasTemplateCache: string | null = null;

function loadTemplate(filePath: string, cache: string | null): string {
  if (cache) {
    return cache;
  }
  return fs.readFileSync(filePath, 'utf-8');
}

export function renderSchemaFile(data: {
  schemaName: string;
  blueIdsKey: string;
  usesBlueNode: boolean;
  schemaImports: Array<{ importPath: string; typeNames: string[] }>;
  schemaExpressionIndented: string;
}): string {
  if (!schemaTemplateCache) {
    schemaTemplateCache = loadTemplate(schemaTemplatePath, schemaTemplateCache);
  }
  return ejs.render(schemaTemplateCache, data as any, {
    filename: schemaTemplatePath,
  });
}

export function renderSchemasIndexFile(data: {
  schemaImports: string[];
  schemaExports: string[];
  schemaEntries: string[];
}): string {
  if (!indexTemplateCache) {
    indexTemplateCache = loadTemplate(indexTemplatePath, indexTemplateCache);
  }
  return ejs.render(indexTemplateCache, data as any, {
    filename: indexTemplatePath,
  });
}

export function renderSchemasBarrelFile(): string {
  if (!schemasTemplateCache) {
    schemasTemplateCache = loadTemplate(schemasTemplatePath, schemasTemplateCache);
  }
  return ejs.render(schemasTemplateCache, {} as any, { filename: schemasTemplatePath });
}

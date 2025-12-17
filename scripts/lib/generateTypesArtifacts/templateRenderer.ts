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
const templateCache = new Map<string, string>();

function loadTemplate(templateFileName: string): { template: string; filename: string } {
  const filename = path.join(templatesDir, templateFileName);
  const cached = templateCache.get(filename);
  if (cached) {
    return { template: cached, filename };
  }
  const template = fs.readFileSync(filename, 'utf-8');
  templateCache.set(filename, template);
  return { template, filename };
}

function render(templateFileName: string, data: Record<string, unknown>): string {
  const { template, filename } = loadTemplate(templateFileName);
  return ejs.render(template, data as any, { filename });
}

export function renderRootMetaFile(data: {
  nameJson: string;
  repositoryVersionsJson: string;
}): string {
  return render('root-meta.ts.ejs', data as any);
}

export function renderRootIndexFile(): string {
  return render('root-index.ts.ejs', {});
}

export function renderRepositoryFile(data: {
  packages: Array<{ slug: string; identifier: string }>;
}): string {
  return render('repository.ts.ejs', data as any);
}

export function renderPackagesIndexFile(data: {
  packages: Array<{ slug: string; identifier: string }>;
}): string {
  return render('packages-index.ts.ejs', data as any);
}

export function renderPackageMetaFile(data: { metaJson: string }): string {
  return render('package-meta.ts.ejs', data as any);
}

export function renderPackageIndexFile(): string {
  return render('package-index.ts.ejs', {});
}

export function renderBlueIdsFile(data: { blueIdsJson: string }): string {
  return render('blue-ids.ts.ejs', data as any);
}


import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

type EjsModule = {
  render: (
    template: string,
    data: Record<string, unknown>,
    options?: { filename?: string },
  ) => string;
};

const require = createRequire(import.meta.url);
const ejs = require('ejs') as EjsModule;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.join(__dirname, 'templates', 'README.md.ejs');
let templateCache: string | null = null;

function loadTemplate(): string {
  if (templateCache) {
    return templateCache;
  }
  templateCache = fs.readFileSync(templatePath, 'utf-8');
  return templateCache;
}

export function writeTypesReadme(
  repoRoot: string,
  data: { packageName: string; typeModuleName: string; typeModuleBlueId: string },
) {
  const readme = ejs.render(loadTemplate(), data, { filename: templatePath });
  const readmePath = path.join(repoRoot, 'libs', 'types', 'README.md');
  fs.mkdirSync(path.dirname(readmePath), { recursive: true });
  fs.writeFileSync(readmePath, readme);
}

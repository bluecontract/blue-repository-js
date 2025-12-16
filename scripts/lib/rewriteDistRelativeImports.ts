import * as fs from 'node:fs';
import * as path from 'node:path';

const RELATIVE_PREFIX = /^\.{1,2}\//;
const EXT_PATTERN = /\.(?:js|mjs|cjs|json|node)$/i;

function shouldRewrite(specifier: string): boolean {
  if (!RELATIVE_PREFIX.test(specifier)) {
    return false;
  }
  if (specifier.includes('?') || specifier.includes('#')) {
    return false;
  }
  return !EXT_PATTERN.test(specifier) && path.extname(specifier) === '';
}

function ensureTargetExists(specifierWithJs: string, filePath?: string): void {
  if (!filePath) {
    return;
  }
  const target = path.resolve(path.dirname(filePath), specifierWithJs);
  if (!fs.existsSync(target)) {
    throw new Error(
      `Rewritten import target '${specifierWithJs}' does not exist (from ${filePath})`,
    );
  }
}

export function rewriteSourceImportsToJsExtensions(
  source: string,
  options?: { filePath?: string },
): string {
  const replaceSpecifier = (raw: string) => {
    if (!shouldRewrite(raw)) {
      return raw;
    }
    const rewritten = `${raw}.js`;
    ensureTargetExists(rewritten, options?.filePath);
    return rewritten;
  };

  const withStatic = source.replace(
    /(from\s+['"])([^'"]+)(['"])/g,
    (_: string, prefix: string, specifier: string, suffix: string) =>
      `${prefix}${replaceSpecifier(specifier)}${suffix}`,
  );

  const withDynamic = withStatic.replace(
    /(import\(\s*['"])([^'"]+)(['"]\s*\))/g,
    (_: string, prefix: string, specifier: string, suffix: string) =>
      `${prefix}${replaceSpecifier(specifier)}${suffix}`,
  );

  return withDynamic;
}

function rewriteFile(filePath: string) {
  const original = fs.readFileSync(filePath, 'utf-8');
  const rewritten = rewriteSourceImportsToJsExtensions(original, { filePath });
  if (rewritten !== original) {
    fs.writeFileSync(filePath, rewritten);
  }
}

function walk(dir: string, visitor: (file: string) => void) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, visitor);
    } else if (
      entry.isFile() &&
      (entry.name.endsWith('.js') || entry.name.endsWith('.d.ts'))
    ) {
      visitor(full);
    }
  }
}

export function rewriteDistRelativeImportsToJsExtensions(targetDir: string) {
  walk(targetDir, rewriteFile);
}


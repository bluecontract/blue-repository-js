export function toIdentifier(typeName: string, blueId: string): string {
  const base = typeName
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  if (base.length > 0) {
    return base;
  }

  throw new Error(
    `Invalid type name '${typeName}' for blueId '${blueId}': cannot derive a stable identifier`,
  );
}

export function toPackageSlug(packageName: string): string {
  const trimmed = packageName.trim();
  const slug = trimmed.toLowerCase().replace(/[^a-z0-9-]/g, '-');

  if (!slug || !/[a-z0-9]/.test(slug)) {
    throw new Error(
      `Invalid package name '${packageName}': cannot derive a stable slug`,
    );
  }

  return slug;
}

const RESERVED_IDENTIFIER_WORDS = new Set([
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'export',
  'extends',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'new',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
  'let',
  'enum',
  'await',
  'implements',
  'interface',
  'package',
  'private',
  'protected',
  'public',
  'static',
]);

export function toPackageIdentifier(packageSlug: string): string {
  const base = packageSlug.replace(/-/g, '_');
  if (
    /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(base) &&
    !RESERVED_IDENTIFIER_WORDS.has(base)
  ) {
    return base;
  }

  const prefixed = `pkg_${base}`;
  return RESERVED_IDENTIFIER_WORDS.has(prefixed) ? `pkg_${prefixed}` : prefixed;
}

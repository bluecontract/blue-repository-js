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

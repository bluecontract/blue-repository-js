/**
 * Deeply sorts object keys to produce a canonical JSON structure.
 * - Objects: keys sorted A→Z
 * - Arrays: order preserved, elements canonicalized
 * - Primitives: returned as-is
 */
export function canonicalizeValue(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => canonicalizeValue(item));
  }
  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    const sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b));
    const result: Record<string, unknown> = {};
    for (const key of sortedKeys) {
      result[key] = canonicalizeValue(obj[key]);
    }
    return result;
  }
  return value;
}


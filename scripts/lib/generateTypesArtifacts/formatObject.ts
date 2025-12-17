export function formatObject(value: unknown): string {
  return JSON.stringify(value, null, 2);
}


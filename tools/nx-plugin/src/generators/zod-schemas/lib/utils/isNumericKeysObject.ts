// isNumericKeysObject.ts
export function isNumericKeysObject(obj: unknown): boolean {
  if (typeof obj !== 'object' || obj === null) return false;
  const keys = Object.keys(obj);
  return (
    keys.length > 0 &&
    keys.every((key) => {
      const num = Number(key);
      return !isNaN(num) && Number.isInteger(num);
    })
  );
}

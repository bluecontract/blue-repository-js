import { RESERVED_KEYS } from './constants.js';

export function normalizeAliasString(ref: string): string {
  return ref.toLowerCase();
}

export function getRefBlueId(node: unknown): string | undefined {
  if (!isRecord(node)) {
    return undefined;
  }
  if (typeof node.blueId === 'string') {
    return node.blueId;
  }
  const typeValue = node.type;
  if (isRecord(typeValue) && typeof typeValue.blueId === 'string') {
    return typeValue.blueId;
  }
  if (typeof typeValue === 'string') {
    return typeValue;
  }
  return undefined;
}

export function getItemTypeNode(def: unknown): unknown | undefined {
  return isRecord(def) ? def.itemType : undefined;
}

export function getValueTypeNode(def: unknown): unknown | undefined {
  return isRecord(def) ? def.valueType : undefined;
}

export function hasInlineShape(def: unknown): boolean {
  if (!isRecord(def)) {
    return false;
  }
  return Object.keys(def).some((k) => !RESERVED_KEYS.has(k));
}

export function pathToString(path: string[]): string {
  return path.length ? path.join('.') : '(root)';
}

export function indentBlock(value: string, spaces: number): string {
  const pad = ' '.repeat(spaces);
  return value
    .split('\n')
    .map((line) => (line.length > 0 ? `${pad}${line}` : pad))
    .join('\n');
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

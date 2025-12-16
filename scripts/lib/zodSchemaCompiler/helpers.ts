import { RESERVED_KEYS } from './constants.js';

export function normalizeAliasString(ref: string): string {
  return ref.toLowerCase();
}

export function getRefBlueId(node: any): string | undefined {
  if (!node || typeof node !== 'object') {
    return undefined;
  }
  if (typeof node.blueId === 'string') {
    return node.blueId;
  }
  if (typeof node?.type?.blueId === 'string') {
    return node.type.blueId;
  }
  if (typeof node?.type === 'string') {
    return node.type;
  }
  return undefined;
}

export function getItemTypeNode(def: any): any | undefined {
  return def?.itemType;
}

export function getValueTypeNode(def: any): any | undefined {
  return def?.valueType;
}

export function hasInlineShape(def: any): boolean {
  if (!def || typeof def !== 'object') {
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

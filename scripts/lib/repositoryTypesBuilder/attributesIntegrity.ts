import {
  OBJECT_CONTRACTS,
  OBJECT_MERGE_POLICY,
  OBJECT_SCHEMA,
  parsePointer,
} from '@blue-labs/repository-contract';
import type { BlueTypeVersion } from './types.js';

export function validateAttributesIntegrity(
  repoName: string,
  packageName: string,
  typeName: string,
  currentBlueId: string,
  versions: readonly BlueTypeVersion[],
  content: unknown,
) {
  if (!content) {
    return;
  }

  const introducedMap = new Map<string, { index: number; segments: string[] }>();
  for (const version of versions) {
    for (const pointer of version.attributesAdded) {
      const decoded = decodePointer(pointer);
      if (!decoded) {
        throw new Error(
          `Invalid attributesAdded pointer '${pointer}' for type ${packageName}/${typeName} (${currentBlueId}) in repository ${repoName}: invalid structure`,
        );
      }

      if (introducedMap.has(pointer)) {
        throw new Error(
          `Duplicate attributesAdded pointer '${pointer}' for type ${packageName}/${typeName} (${currentBlueId}) in repository ${repoName}`,
        );
      }

      for (const [existingPointer, meta] of introducedMap.entries()) {
        if (isStrictPrefix(meta.segments, decoded)) {
          if (meta.index > version.repositoryVersionIndex) {
            throw pointerError(
              repoName,
              packageName,
              typeName,
              currentBlueId,
              version.repositoryVersionIndex,
              pointer,
              `Ancestor pointer '${existingPointer}' introduced after descendant '${pointer}'`,
            );
          }
          if (meta.index === version.repositoryVersionIndex) {
            throw pointerError(
              repoName,
              packageName,
              typeName,
              currentBlueId,
              version.repositoryVersionIndex,
              pointer,
              `Redundant ancestor/descendant pointers in the same version: '${existingPointer}' and '${pointer}'`,
            );
          }
        }

        if (isStrictPrefix(decoded, meta.segments)) {
          if (version.repositoryVersionIndex > meta.index) {
            throw pointerError(
              repoName,
              packageName,
              typeName,
              currentBlueId,
              version.repositoryVersionIndex,
              pointer,
              `Ancestor pointer '${pointer}' introduced after descendant '${existingPointer}'`,
            );
          }
          if (version.repositoryVersionIndex === meta.index) {
            throw pointerError(
              repoName,
              packageName,
              typeName,
              currentBlueId,
              version.repositoryVersionIndex,
              pointer,
              `Redundant ancestor/descendant pointers in the same version: '${pointer}' and '${existingPointer}'`,
            );
          }
        }
      }

      introducedMap.set(pointer, {
        index: version.repositoryVersionIndex,
        segments: decoded,
      });

      assertPointerExists(
        repoName,
        packageName,
        typeName,
        currentBlueId,
        version.repositoryVersionIndex,
        pointer,
        decoded,
        content,
      );
    }
  }
}

function decodePointer(pointer: string): string[] | null {
  if (!pointer.startsWith('/')) {
    return null;
  }
  try {
    const segments = parsePointer(pointer);
    if (segments.length === 0) {
      return null;
    }
    return segments;
  } catch {
    return null;
  }
}

function isStrictPrefix(prefix: string[], full: string[]): boolean {
  if (prefix.length >= full.length) {
    return false;
  }
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] !== full[i]) {
      return false;
    }
  }
  return true;
}

function assertPointerExists(
  repoName: string,
  packageName: string,
  typeName: string,
  currentBlueId: string,
  repositoryVersionIndex: number,
  rawPointer: string,
  segments: string[],
  content: unknown,
) {
  let cursor: unknown = content;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (!isRecord(cursor)) {
      throw pointerError(
        repoName,
        packageName,
        typeName,
        currentBlueId,
        repositoryVersionIndex,
        rawPointer,
        `Segment '${segment}' does not exist`,
      );
    }
    if (!(segment in cursor)) {
      throw pointerError(
        repoName,
        packageName,
        typeName,
        currentBlueId,
        repositoryVersionIndex,
        rawPointer,
        `Segment '${segment}' does not exist`,
      );
    }
    const record = cursor as Record<string, unknown>;
    if (i === segments.length - 1) {
      const leaf = record[segment];
      if (isBreakingLeaf(leaf)) {
        throw pointerError(
          repoName,
          packageName,
          typeName,
          currentBlueId,
          repositoryVersionIndex,
          rawPointer,
          'Pointer targets a breaking change (scalar, array, value/items payload, or required field)',
        );
      }
      return;
    }
    cursor = record[segment];
  }
}

function pointerError(
  repoName: string,
  packageName: string,
  typeName: string,
  currentBlueId: string,
  repositoryVersionIndex: number,
  pointer: string,
  reason: string,
) {
  return new Error(
    `Invalid attributesAdded pointer '${pointer}' for type ${packageName}/${typeName} (${currentBlueId}) in repository ${repoName} at index ${repositoryVersionIndex}: ${reason}`,
  );
}

const PAYLOAD_KEYS = new Set(['value', 'items']);
const SKIP_SUBTREES = new Set([
  OBJECT_SCHEMA,
  OBJECT_MERGE_POLICY,
  OBJECT_CONTRACTS,
]);

function isBreakingLeaf(value: unknown): boolean {
  if (value === null || value === undefined) {
    return false;
  }
  if (typeof value !== 'object') {
    return true;
  }
  if (Array.isArray(value)) {
    return true;
  }

  const obj = value as Record<string, unknown>;
  const schema = obj[OBJECT_SCHEMA];
  if (
    schema &&
    typeof schema === 'object' &&
    (schema as { required?: unknown }).required === true
  ) {
    return true;
  }

  return containsPayloadKeys(obj);
}

function containsPayloadKeys(node: unknown): boolean {
  if (node === null || node === undefined) {
    return false;
  }
  if (typeof node !== 'object') {
    return false;
  }
  const obj = node as Record<string, unknown>;
  for (const [key, val] of Object.entries(obj)) {
    if (PAYLOAD_KEYS.has(key)) {
      return true;
    }
    if (SKIP_SUBTREES.has(key)) {
      continue;
    }
    if (containsPayloadKeys(val)) {
      return true;
    }
  }
  return false;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

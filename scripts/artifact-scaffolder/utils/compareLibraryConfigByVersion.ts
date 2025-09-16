import * as path from 'node:path';

export interface LibraryConfigLike {
  parentDir: string;
}

export function parseBaseAndVersionFromDirName(dirName: string): {
  base: string;
  versionParts: number[];
} {
  const match = dirName.match(/^(.*)V(\d+(?:\.\d+)*)$/);
  if (!match) {
    return { base: dirName, versionParts: [] };
  }

  const base = match[1];
  const versionParts = match[2]
    .split('.')
    .map((segment) => Number.parseInt(segment, 10))
    .filter((n) => Number.isFinite(n));

  return { base, versionParts };
}

/**
 * Compare two library configs by semantic version embedded in the last directory name.
 * Sorting is descending by version when the base matches. Fallback is descending by parentDir.
 */
export function compareLibraryConfigByVersionDesc<
  A extends LibraryConfigLike,
  B extends LibraryConfigLike
>(a: A, b: B): number {
  const aName = path.basename(a.parentDir);
  const bName = path.basename(b.parentDir);

  const aInfo = parseBaseAndVersionFromDirName(aName);
  const bInfo = parseBaseAndVersionFromDirName(bName);

  if (aInfo.base === bInfo.base) {
    const maxLen = Math.max(
      aInfo.versionParts.length,
      bInfo.versionParts.length
    );
    for (let i = 0; i < maxLen; i++) {
      const av = aInfo.versionParts[i] ?? 0;
      const bv = bInfo.versionParts[i] ?? 0;
      if (av !== bv) return bv - av; // Descending numeric version
    }
  }

  return b.parentDir.localeCompare(a.parentDir);
}

import type {
  BlueRepositoryDocument,
  BlueRepositoryPackage,
} from './types.js';
import { validateAttributesIntegrity } from './attributesIntegrity.js';
import { toIdentifier } from '../identifier.js';
import {
  normalizeVersions,
  resolveCurrentBlueId,
  validateVersions,
} from './versions.js';

export function buildPackages(
  document: BlueRepositoryDocument,
): Record<string, BlueRepositoryPackage> {
  const result: Record<string, BlueRepositoryPackage> = {};
  const repoVersionCount = (document.repositoryVersions || []).length;

  for (const pkg of document.packages || []) {
    const packageName = (pkg.name || '').toLowerCase();
    const aliases: Record<string, string> = {};
    const typesMeta: BlueRepositoryPackage['typesMeta'] = {};
    const contents: BlueRepositoryPackage['contents'] = {};
    const typeNames = new Set<string>();
    const safeNameIndex = new Map<string, { typeName: string; blueId: string }>();

    for (const type of pkg.types || []) {
      const rawName = (type.content as any)?.name;
      if (typeof rawName !== 'string') {
        throw new Error(
          `Invalid type in package '${packageName}': content.name must be a string`,
        );
      }
      const typeName = rawName;
      if (typeName.trim().length === 0) {
        throw new Error(
          `Invalid type name in package '${packageName}': content.name must not be empty`,
        );
      }
      if (typeName.trim() !== typeName) {
        throw new Error(
          `Invalid type name '${typeName}' in package '${packageName}': leading/trailing whitespace is not allowed`,
        );
      }
      if (typeNames.has(typeName)) {
        throw new Error(
          `Duplicate type name '${typeName}' detected in package '${packageName}'.`,
        );
      }
      typeNames.add(typeName);
      const currentBlueId = resolveCurrentBlueId(type);
      validateVersions(type, repoVersionCount, packageName, currentBlueId);

      const safeName = toIdentifier(typeName, currentBlueId);
      const existing = safeNameIndex.get(safeName);
      if (existing) {
        throw new Error(
          `Type name collision in package '${packageName}': '${existing.typeName}' (${existing.blueId}) and '${typeName}' (${currentBlueId}) both map to identifier '${safeName}'. Rename one type to avoid clobbering generated files.`,
        );
      }
      safeNameIndex.set(safeName, { typeName, blueId: currentBlueId });

      aliases[`${packageName}/${typeName}`] = currentBlueId;
      typesMeta[currentBlueId] = {
        status: type.status,
        name: typeName,
        versions: normalizeVersions(type),
      };

      contents[currentBlueId] = type.content;
    }

    Object.entries(typesMeta).forEach(([currentBlueId, meta]) => {
      if (meta.status !== 'stable') {
        return;
      }
      const content = contents[currentBlueId];
      validateAttributesIntegrity(
        document.name,
        packageName,
        meta.name,
        currentBlueId,
        meta.versions,
        content,
      );
    });

    result[packageName] = {
      name: packageName,
      aliases,
      typesMeta,
      contents,
      schemas: {},
    };
  }

  return result;
}

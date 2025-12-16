import type {
  BlueRepositoryDocument,
  BlueRepositoryPackage,
} from './types.js';
import { validateAttributesIntegrity } from './attributesIntegrity.js';
import { toIdentifier, toPackageSlug } from '../identifier.js';
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
  const packageSlugIndex = new Map<string, string>();

  for (const pkg of document.packages || []) {
    const rawPackageName = (pkg as { name?: unknown }).name;
    if (typeof rawPackageName !== 'string') {
      throw new Error('Invalid package: name must be a string');
    }
    const packageDisplayName = rawPackageName;
    if (packageDisplayName.trim().length === 0) {
      throw new Error('Invalid package name: must not be empty');
    }
    if (packageDisplayName.trim() !== packageDisplayName) {
      throw new Error(
        `Invalid package name '${packageDisplayName}': leading/trailing whitespace is not allowed`,
      );
    }
    if (packageDisplayName.includes('/')) {
      throw new Error(
        `Invalid package name '${packageDisplayName}': '/' is not allowed`,
      );
    }
    const packageSlug = toPackageSlug(packageDisplayName);
    const existingPackage = packageSlugIndex.get(packageSlug);
    if (existingPackage) {
      throw new Error(
        `Package name collision: '${existingPackage}' and '${packageDisplayName}' both map to slug '${packageSlug}'. Rename one package to avoid clobbering generated artifacts.`,
      );
    }
    packageSlugIndex.set(packageSlug, packageDisplayName);

    const aliases: Record<string, string> = {};
    const typesMeta: BlueRepositoryPackage['typesMeta'] = {};
    const contents: BlueRepositoryPackage['contents'] = {};
    const typeNames = new Set<string>();
    const safeNameIndex = new Map<string, { typeName: string; blueId: string }>();

    for (const type of pkg.types || []) {
      const rawName = (type.content as any)?.name;
      if (typeof rawName !== 'string') {
        throw new Error(
          `Invalid type in package '${packageDisplayName}': content.name must be a string`,
        );
      }
      const typeName = rawName;
      if (typeName.trim().length === 0) {
        throw new Error(
          `Invalid type name in package '${packageDisplayName}': content.name must not be empty`,
        );
      }
      if (typeName.trim() !== typeName) {
        throw new Error(
          `Invalid type name '${typeName}' in package '${packageDisplayName}': leading/trailing whitespace is not allowed`,
        );
      }
      if (typeNames.has(typeName)) {
        throw new Error(
          `Duplicate type name '${typeName}' detected in package '${packageDisplayName}'.`,
        );
      }
      typeNames.add(typeName);
      const currentBlueId = resolveCurrentBlueId(type);
      validateVersions(type, repoVersionCount, packageDisplayName, currentBlueId);

      const safeName = toIdentifier(typeName, currentBlueId);
      const existing = safeNameIndex.get(safeName);
      if (existing) {
        throw new Error(
          `Type name collision in package '${packageDisplayName}': '${existing.typeName}' (${existing.blueId}) and '${typeName}' (${currentBlueId}) both map to identifier '${safeName}'. Rename one type to avoid clobbering generated files.`,
        );
      }
      safeNameIndex.set(safeName, { typeName, blueId: currentBlueId });

      aliases[`${packageDisplayName}/${typeName}`] = currentBlueId;
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
        packageDisplayName,
        meta.name,
        currentBlueId,
        meta.versions,
        content,
      );
    });

    result[packageSlug] = {
      name: packageDisplayName,
      aliases,
      typesMeta,
      contents,
      schemas: {},
    };
  }

  return result;
}

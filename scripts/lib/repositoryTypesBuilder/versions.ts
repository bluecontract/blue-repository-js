import { validateAttributesAddedPointer } from '@blue-labs/repository-contract';
import type { BlueTypeMetadata, BlueTypeVersion } from './types.js';

export function resolveCurrentBlueId(type: BlueTypeMetadata): string {
  const latest = [...(type.versions || [])]
    .sort((a, b) => a.repositoryVersionIndex - b.repositoryVersionIndex)
    .at(-1);
  if (!latest) {
    throw new Error(
      type.status === 'dev'
        ? 'Dev type missing current version entry'
        : 'Stable type missing versions entries',
    );
  }
  return latest.typeBlueId;
}

export function normalizeVersions(type: BlueTypeMetadata): BlueTypeVersion[] {
  if (type.status === 'dev') {
    return type.versions ? [...type.versions] : [];
  }
  return [...(type.versions || [])].sort(
    (a, b) => a.repositoryVersionIndex - b.repositoryVersionIndex,
  );
}

export function validateVersions(
  type: BlueTypeMetadata,
  repoVersionCount: number,
  packageName: string,
  currentBlueId: string,
) {
  if (type.status === 'dev') {
    if (type.versions && type.versions.length > 1) {
      throw new Error(
        `Dev type ${packageName}/${type.content?.name} (${currentBlueId}) must not declare multiple versions`,
      );
    }
    if (
      type.versions &&
      type.versions.some(
        (v) =>
          v.repositoryVersionIndex < 0 ||
          v.repositoryVersionIndex >= repoVersionCount,
      )
    ) {
      throw new Error(
        `Dev type ${packageName}/${type.content?.name} (${currentBlueId}) has invalid repositoryVersionIndex`,
      );
    }
    return;
  }

  if (!type.versions || type.versions.length === 0) {
    throw new Error(
      `Stable type ${packageName}/${type.content?.name} (${currentBlueId}) must have at least one version entry`,
    );
  }

  const sorted = [...type.versions].sort(
    (a, b) => a.repositoryVersionIndex - b.repositoryVersionIndex,
  );

  const seen = new Set<number>();
  sorted.forEach((version) => {
    if (
      version.repositoryVersionIndex < 0 ||
      version.repositoryVersionIndex >= repoVersionCount
    ) {
      throw new Error(
        `Stable type ${packageName}/${type.content?.name} (${currentBlueId}) has invalid repositoryVersionIndex ${version.repositoryVersionIndex}`,
      );
    }
    if (seen.has(version.repositoryVersionIndex)) {
      throw new Error(
        `Stable type ${packageName}/${type.content?.name} (${currentBlueId}) has duplicate repositoryVersionIndex ${version.repositoryVersionIndex}`,
      );
    }
    seen.add(version.repositoryVersionIndex);

    for (const pointer of version.attributesAdded || []) {
      validateAttributesAddedPointerWithContext(
        pointer,
        packageName,
        currentBlueId,
        version.repositoryVersionIndex,
      );
    }
  });
}

function validateAttributesAddedPointerWithContext(
  pointer: string,
  packageName: string,
  currentBlueId: string,
  repositoryVersionIndex: number,
) {
  try {
    validateAttributesAddedPointer(pointer);
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    throw new Error(
      `Invalid attributesAdded pointer '${pointer}' for type ${packageName}/${currentBlueId}: ${reason} (index ${repositoryVersionIndex})`,
    );
  }
}

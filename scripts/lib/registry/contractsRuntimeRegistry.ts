import { createHash } from 'node:crypto';
import * as fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

export const BLUE_CONTRACTS_RUNTIME_REGISTRY_PACKAGE_IDENTITY =
  'sha256:46a7744c1cbfa4b00e1d8a99f6ca3f0089ef697de968fee08547894ab02b0ca1';

type RegistryEntry = {
  key: string;
  blueId: string;
  fixtureOnly: boolean;
  semanticDescriptionIdentityBearing: boolean;
};

type RegistryManifest = {
  registry: string;
  registryKind: string;
  specificationVersion: string;
  languageVersion: string;
  fixturePackageIdentity: string;
  entries: RegistryEntry[];
  packageIdentity: string;
};

export const CONTRACTS_RUNTIME_BLUE_IDS_BY_KEY = loadRegistry();

function loadRegistry(): ReadonlyMap<string, string> {
  const manifestPath = fileURLToPath(
    new URL('../../registry/blue-contracts-1.0/manifest.yaml', import.meta.url)
  );
  const parsed = yaml.load(fs.readFileSync(manifestPath, 'utf8'));
  if (!isRecord(parsed)) {
    throw new Error('Contracts runtime registry manifest must be an object.');
  }
  const manifest = parsed as unknown as RegistryManifest;
  if (
    manifest.registry !== 'blue-contracts-runtime' ||
    manifest.registryKind !== 'runtime-type' ||
    manifest.specificationVersion !== '1.0' ||
    manifest.languageVersion !== '1.0' ||
    manifest.packageIdentity !==
      BLUE_CONTRACTS_RUNTIME_REGISTRY_PACKAGE_IDENTITY
  ) {
    throw new Error('Unexpected Contracts runtime registry release.');
  }

  const normalized = {
    ...manifest,
    packageIdentity: null,
    fixturePackageIdentity: null,
  };
  const calculatedIdentity = `sha256:${createHash('sha256')
    .update(JSON.stringify(canonicalizeJson(normalized)), 'utf8')
    .digest('hex')}`;
  if (calculatedIdentity !== manifest.packageIdentity) {
    throw new Error(
      `Contracts runtime registry identity mismatch: manifest=${manifest.packageIdentity}, calculated=${calculatedIdentity}.`
    );
  }
  if (!Array.isArray(manifest.entries)) {
    throw new Error('Contracts runtime registry entries must be a list.');
  }

  const production = new Map<string, string>();
  const allBlueIds = new Set<string>();
  for (const entry of manifest.entries) {
    if (
      !isRecord(entry) ||
      typeof entry.key !== 'string' ||
      entry.key.length === 0 ||
      typeof entry.blueId !== 'string' ||
      entry.blueId.length === 0 ||
      typeof entry.fixtureOnly !== 'boolean' ||
      entry.semanticDescriptionIdentityBearing !== true
    ) {
      throw new Error('Contracts runtime registry entry is invalid.');
    }
    if (allBlueIds.has(entry.blueId)) {
      throw new Error(
        `Contracts runtime registry repeats BlueId ${entry.blueId}.`
      );
    }
    allBlueIds.add(entry.blueId);
    if (!entry.fixtureOnly) {
      if (production.has(entry.key)) {
        throw new Error(`Contracts runtime registry repeats key ${entry.key}.`);
      }
      production.set(entry.key, entry.blueId);
    }
  }
  if (manifest.entries.length !== 27 || production.size !== 24) {
    throw new Error(
      `Contracts runtime registry has ${manifest.entries.length} entries (${production.size} production); expected 27 (24 production).`
    );
  }
  return production;
}

function canonicalizeJson(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(canonicalizeJson);
  }
  if (isRecord(value)) {
    return Object.keys(value)
      .sort()
      .reduce<Record<string, unknown>>((result, key) => {
        result[key] = canonicalizeJson(value[key]);
        return result;
      }, {});
  }
  return value;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

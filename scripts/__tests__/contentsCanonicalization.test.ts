import { describe, expect, it } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { repoRoot } from './testUtils';
import { generateTypesArtifacts } from '../lib/generateTypesArtifacts.js';

describe('generated contents canonicalization', () => {
  it('canonicalizes content objects and sorts index by blueId', () => {
    const baseDir = path.join(repoRoot, 'scripts', 'tools-out', 'test-fixtures');
    fs.mkdirSync(baseDir, { recursive: true });
    const fixtureRepoRoot = fs.mkdtempSync(path.join(baseDir, 'contents-'));

    const fixtureTypesRoot = path.join(fixtureRepoRoot, 'libs', 'types');
    fs.mkdirSync(fixtureTypesRoot, { recursive: true });

    fs.copyFileSync(
      path.join(repoRoot, 'libs', 'types', 'package.json'),
      path.join(fixtureTypesRoot, 'package.json'),
    );
    fs.copyFileSync(
      path.join(repoRoot, 'tsconfig.base.json'),
      path.join(fixtureRepoRoot, 'tsconfig.base.json'),
    );
    fs.copyFileSync(
      path.join(repoRoot, 'libs', 'types', 'tsconfig.lib.json'),
      path.join(fixtureTypesRoot, 'tsconfig.lib.json'),
    );

    const sourcePath = path.join(fixtureRepoRoot, 'BlueRepository.blue');
    fs.writeFileSync(
      sourcePath,
      [
        `name: Contents Canonicalization Fixture`,
        `repositoryVersions:`,
        `  - R0`,
        `packages:`,
        `  - name: Sample`,
        `    types:`,
        `      - status: stable`,
        `        content:`,
        `          name: Beta`,
        `          z: 1`,
        `          a: 2`,
        `          nested:`,
        `            z: 1`,
        `            a: 2`,
        `        versions:`,
        `          - repositoryVersionIndex: 0`,
        `            typeBlueId: B`,
        `            attributesAdded: []`,
        `      - status: stable`,
        `        content:`,
        `          name: Alpha`,
        `          z: 1`,
        `          a: 2`,
        `        versions:`,
        `          - repositoryVersionIndex: 0`,
        `            typeBlueId: A`,
        `            attributesAdded: []`,
        ``,
      ].join('\n'),
      'utf-8',
    );

    generateTypesArtifacts({ repoRoot: fixtureRepoRoot, sourcePath });

    const sampleRoot = path.join(fixtureTypesRoot, 'src', 'packages', 'sample');
    const alphaSource = fs.readFileSync(
      path.join(sampleRoot, 'contents', 'Alpha.ts'),
      'utf-8',
    );
    expect(alphaSource.indexOf('"a"')).toBeLessThan(alphaSource.indexOf('"z"'));

    const betaSource = fs.readFileSync(
      path.join(sampleRoot, 'contents', 'Beta.ts'),
      'utf-8',
    );
    expect(betaSource.indexOf('"a"')).toBeLessThan(betaSource.indexOf('"z"'));
    const nestedStart = betaSource.indexOf('"nested"');
    expect(nestedStart).toBeGreaterThanOrEqual(0);
    expect(betaSource.indexOf('"a"', nestedStart)).toBeLessThan(
      betaSource.indexOf('"z"', nestedStart),
    );

    const indexSource = fs.readFileSync(
      path.join(sampleRoot, 'contents', 'index.ts'),
      'utf-8',
    );
    expect(indexSource.indexOf("'A'")).toBeLessThan(indexSource.indexOf("'B'"));
  });
});

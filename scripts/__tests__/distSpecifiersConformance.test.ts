import { beforeAll, describe, expect, it } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';
import {
  repoRoot,
  collectFiles,
} from './testUtils';
import { rewriteDistRelativeImportsToJsExtensions } from '../lib/rewriteDistRelativeImports';

describe('dist specifiers conformance', () => {
  let distRoot: string;

  beforeAll(() => {
    const baseDir = path.join(repoRoot, 'scripts', 'tools-out', 'test-fixtures');
    fs.mkdirSync(baseDir, { recursive: true });
    distRoot = fs.mkdtempSync(path.join(baseDir, 'dist-'));

    fs.mkdirSync(path.join(distRoot, 'a'), { recursive: true });
    fs.writeFileSync(
      path.join(distRoot, 'a', 'index.d.ts'),
      `export * from './b';\n`,
    );
    fs.writeFileSync(path.join(distRoot, 'a', 'b.js'), `export const b = 1;\n`);

    rewriteDistRelativeImportsToJsExtensions(distRoot);
  });

  it('rewrites relative imports in .d.ts to include .js extensions', () => {
    const dtsFiles = collectFiles(distRoot, (f) => f.endsWith('.d.ts'));
    expect(dtsFiles.length).toBeGreaterThan(0);

    for (const file of dtsFiles) {
      const text = fs.readFileSync(file, 'utf-8');
      const regex = /(from\s+['"])(\.{1,2}\/[^'"]+)(['"])/g;
      let match: RegExpExecArray | null;
      while ((match = regex.exec(text))) {
        const specifier = match[2];
        expect(specifier.endsWith('.js')).toBe(true);
      }
    }
  });
});

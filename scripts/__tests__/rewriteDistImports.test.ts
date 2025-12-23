import { describe, expect, it } from 'vitest';
import { rewriteSourceImportsToJsExtensions } from '../lib/rewriteDistRelativeImports';

describe('rewriteSourceImportsToJsExtensions', () => {
  it('rewrites static relative imports', () => {
    const input = `import { X } from './Y';\nexport * from '../a/b';\n`;
    const output = rewriteSourceImportsToJsExtensions(input);
    expect(output).toContain(`from './Y.js'`);
    expect(output).toContain(`from '../a/b.js'`);
  });

  it('rewrites dynamic imports', () => {
    const input = `const mod = import("../foo/bar");`;
    const output = rewriteSourceImportsToJsExtensions(input);
    expect(output).toContain(`import("../foo/bar.js")`);
  });

  it('leaves bare and already-qualified specifiers untouched', () => {
    const input = `import { z } from 'zod';\nimport { X } from './Y.js';\n`;
    const output = rewriteSourceImportsToJsExtensions(input);
    expect(output).toEqual(input);
  });
});

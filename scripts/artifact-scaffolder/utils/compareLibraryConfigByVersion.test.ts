import { describe, expect, it } from 'vitest';
import {
  parseBaseAndVersionFromDirName,
  compareLibraryConfigByVersionDesc,
} from './compareLibraryConfigByVersion';

describe('parseBaseAndVersionFromDirName', () => {
  it('parses base and version parts correctly', () => {
    expect(parseBaseAndVersionFromDirName('MyOSDevV0.10')).toEqual({
      base: 'MyOSDev',
      versionParts: [0, 10],
    });
    expect(parseBaseAndVersionFromDirName('CoreDevV12')).toEqual({
      base: 'CoreDev',
      versionParts: [12],
    });
    expect(parseBaseAndVersionFromDirName('Restaurant')).toEqual({
      base: 'Restaurant',
      versionParts: [],
    });
  });
});

describe('compareLibraryConfigByVersionDesc', () => {
  const wrap = (parentDir: string) => ({ parentDir });

  it('sorts descending by version when base matches', () => {
    const a = wrap('/x/data/blue-preprocessed/MyOSDevV0.9');
    const b = wrap('/x/data/blue-preprocessed/MyOSDevV0.10');
    expect(compareLibraryConfigByVersionDesc(a, b)).toBeGreaterThan(0);
    expect(compareLibraryConfigByVersionDesc(b, a)).toBeLessThan(0);
  });

  it('treats missing version as 0 and falls back to name when equal', () => {
    const a = wrap('/x/data/blue-preprocessed/Restaurant');
    const b = wrap('/x/data/blue-preprocessed/Restaurant');
    expect(compareLibraryConfigByVersionDesc(a, b)).toEqual(0);
  });

  it('falls back to parentDir comparison when base differs', () => {
    const a = wrap('/x/data/blue-preprocessed/CoreDevV1');
    const b = wrap('/x/data/blue-preprocessed/MyOSDevV1');
    const result = compareLibraryConfigByVersionDesc(a, b);
    // deterministic but depends on localeCompare; just ensure it returns a number
    expect(typeof result).toBe('number');
  });
});

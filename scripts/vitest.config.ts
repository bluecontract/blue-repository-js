import { defineConfig } from 'vitest/config';

export default defineConfig({
  root: __dirname,
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        target: 'es2020',
        jsx: 'react-jsx',
        strict: false,
      },
    },
  },
  test: {
    environment: 'node',
    include: [
      'artifact-scaffolder/**/*.test.ts',
      'artifact-scaffolder/**/*.spec.ts',
    ],
    globals: true,
    reporters: 'default',
  },
});

import { defineConfig } from 'vitest/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      '__tests__/**/*.{test,spec}.ts',
    ],
    globals: true,
    reporters: 'default',
  },
});

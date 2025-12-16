import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateTypesArtifacts } from '../lib/generateTypesArtifacts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, '..', '..');
const sourcePath =
  process.env.BLUE_REPOSITORY_SOURCE ?? path.resolve(repoRoot, 'BlueRepository.blue');

generateTypesArtifacts({ repoRoot, sourcePath });


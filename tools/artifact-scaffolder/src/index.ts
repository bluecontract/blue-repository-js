#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

/**
 * Recursively gets all blue-ids.yaml files from a directory and its subdirectories
 */
function getAllFiles(dir: string): string[] {
  const files: string[] = [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else if (entry.isFile() && entry.name === 'blue-ids.yaml') {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Transform YAML content to a JS module
 */
function transformToModule(content: string): string {
  const data = yaml.load(content);
  const jsonString = JSON.stringify(data, null, 2);

  return `export default ${jsonString} as const;\n`;
}

/**
 * Generate index.ts with imports from individual blue-ids files
 */
function generateIndex(mainBlueIds: Record<string, string>): string {
  const imports = Object.keys(mainBlueIds)
    .map(
      (key) =>
        `import ${key.replace(/[^a-zA-Z0-9]/g, '_')} from './${key}/blue-ids';`
    )
    .join('\n');

  const exportObject = Object.keys(mainBlueIds)
    .map((key) => `  "${key}": ${key.replace(/[^a-zA-Z0-9]/g, '_')}`)
    .join(',\n');

  return `${imports}\n\nexport const BlueIds = {\n${exportObject}\n} as const;\n`;
}

/**
 * This script processes blue-ids.yaml files and generates:
 * 1. TypeScript modules for each blue-ids.yaml
 * 2. An index.ts file that imports all individual blue-ids.ts files
 */
async function main() {
  // Grab CLI arguments
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error('Please provide at least the input directory path.');
    process.exit(1);
  }

  const inputDir = args[0];
  const outputDir = args[1] || path.join(inputDir, 'transformed');

  if (!fs.existsSync(inputDir)) {
    console.error(`Input directory does not exist: ${inputDir}`);
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Created output directory: ${outputDir}`);
  }

  const files = getAllFiles(inputDir);

  if (files.length === 0) {
    console.warn('No blue-ids.yaml files found in:', inputDir);
  } else {
    console.log('Found files:', files);
  }

  // Keep track of the main blue-ids.yaml content
  let mainBlueIds: Record<string, string> | null = null;

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(inputDir, file);
      const outputFilePath = path.join(
        outputDir,
        relativePath.replace(/\.yaml$/, '.ts')
      );
      const outputFileDir = path.dirname(outputFilePath);

      if (!fs.existsSync(outputFileDir)) {
        fs.mkdirSync(outputFileDir, { recursive: true });
      }

      const transformedContent = transformToModule(content);
      fs.writeFileSync(outputFilePath, transformedContent, 'utf8');
      console.log(`Transformed file written to: ${outputFilePath}`);

      if (path.dirname(relativePath) === '.') {
        mainBlueIds = yaml.load(content) as Record<string, string>;
      }
    } catch (err) {
      console.error(`Error processing file ${file}:`, err);
    }
  }

  if (mainBlueIds) {
    const indexContent = generateIndex(mainBlueIds);
    const indexPath = path.join(outputDir, 'index.ts');
    fs.writeFileSync(indexPath, indexContent);
    console.log(`Generated index file at: ${indexPath}`);
  }
}

main().catch((error) => {
  console.error('An unexpected error occurred in generateFiles.ts:', error);
  process.exit(1);
});

// readYamlFile.ts
import * as fs from 'fs';
import * as yaml from 'js-yaml';

/**
 * Safely read a YAML file and parse it into a known type T.
 */
export function readYamlFile<T>(filePath: string): T {
  const content = fs.readFileSync(filePath, 'utf8');
  return yaml.load(content) as T;
}

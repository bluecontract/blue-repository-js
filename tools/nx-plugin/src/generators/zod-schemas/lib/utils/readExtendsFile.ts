// readExtendsFile.ts
import * as fs from 'fs';
import * as path from 'path';

export function readExtendsFile(modulePath: string): string | null {
  const extendsPath = path.join(
    modulePath.replace('blue-preprocessed', 'blue-repository'),
    '_extends.txt'
  );

  if (fs.existsSync(extendsPath)) {
    const content = fs.readFileSync(extendsPath, 'utf8').trim();
    return content === 'ROOT' ? null : content;
  }
  return null;
}

import * as fs from 'fs';
import * as path from 'path';
import { LibraryConfig } from '../types';

/**
 * Check if a file already has complete contents integration
 */
function isContentsIntegrationComplete(content: string): boolean {
  const hasImport = content.includes("import { contents } from './contents';");
  const hasExport = content.includes("export { contents } from './contents';");
  const hasRepositoryField =
    content.includes('contents,') &&
    content.includes('export const repository: BlueRepository = {');

  return hasImport && hasExport && hasRepositoryField;
}

/**
 * Check if a file has the expected structure for migration
 */
function hasExpectedStructure(content: string): boolean {
  const hasBlueIdsImport = content.includes(
    "import { blueIds } from './blue-ids';"
  );
  const hasSchemasImport = content.includes(
    "import * as schemas from './schema';"
  );
  const hasRepositoryExport = content.includes(
    'export const repository: BlueRepository = {'
  );

  return hasBlueIdsImport && hasSchemasImport && hasRepositoryExport;
}

/**
 * Update the root index.ts file of a library to include contents export
 * This function is idempotent and safe to run multiple times
 */
export async function updateRootIndexFile(libraryConfig: LibraryConfig) {
  const { name } = libraryConfig;
  const indexPath = path.join('libs', name, 'src', 'index.ts');

  // Skip if index.ts doesn't exist
  if (!fs.existsSync(indexPath)) {
    console.log(`📄 No index.ts found for ${name}, skipping`);
    return;
  }

  const content = fs.readFileSync(indexPath, 'utf8');

  // Skip if already completely integrated
  if (isContentsIntegrationComplete(content)) {
    console.log(`✅ ${name} already has complete contents integration`);
    return;
  }

  // Skip if doesn't have the expected structure
  if (!hasExpectedStructure(content)) {
    console.log(`⚠️  ${name} doesn't match expected structure, skipping`);
    return;
  }

  try {
    console.log(`🔄 Migrating root index.ts for ${name}`);

    let updatedContent = content;

    // 1. Add contents import if missing
    if (!content.includes("import { contents } from './contents';")) {
      updatedContent = updatedContent.replace(
        /^(import \* as schemas from '\.\/schema';)$/m,
        "$1\nimport { contents } from './contents';"
      );
    }

    // 2. Add contents export if missing
    if (!updatedContent.includes("export { contents } from './contents';")) {
      updatedContent = updatedContent.replace(
        /^(export \{ blueIds \} from '\.\/blue-ids';)$/m,
        "$1\nexport { contents } from './contents';"
      );
    }

    // 3. Add contents to repository object if missing
    if (!updatedContent.includes('contents,')) {
      // Handle both possible formats of repository object
      updatedContent = updatedContent.replace(
        /(export const repository: BlueRepository = \{\s*blueIds,\s*schemas: Object\.values\(schemas\),)\s*(\};)/,
        '$1\n  contents,\n$2'
      );
    }

    // Verify the migration was successful
    if (isContentsIntegrationComplete(updatedContent)) {
      fs.writeFileSync(indexPath, updatedContent);
      console.log(`✅ Successfully migrated root index.ts for ${name}`);
    } else {
      console.error(`❌ Migration verification failed for ${name}`);
    }
  } catch (error) {
    console.error(`❌ Error migrating root index.ts for ${name}:`, error);
  }
}

/**
 * Migrate root index.ts files for all libraries to include contents export
 * This is an idempotent operation that can be run multiple times safely
 */
export async function updateAllRootIndexFiles(libraryConfigs: LibraryConfig[]) {
  console.log('🚀 Starting root index.ts migration for all libraries');

  let migratedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const libraryConfig of libraryConfigs) {
    const { name } = libraryConfig;
    const indexPath = path.join('libs', name, 'src', 'index.ts');

    if (!fs.existsSync(indexPath)) {
      skippedCount++;
      continue;
    }

    const contentBefore = fs.readFileSync(indexPath, 'utf8');
    const wasAlreadyComplete = isContentsIntegrationComplete(contentBefore);

    await updateRootIndexFile(libraryConfig);

    const contentAfter = fs.readFileSync(indexPath, 'utf8');
    const isNowComplete = isContentsIntegrationComplete(contentAfter);

    if (isNowComplete && !wasAlreadyComplete) {
      migratedCount++;
    } else if (isNowComplete && wasAlreadyComplete) {
      skippedCount++;
    } else {
      errorCount++;
    }
  }

  console.log(`📊 Migration summary:`);
  console.log(`   ✅ Migrated: ${migratedCount} libraries`);
  console.log(`   ⏭️  Skipped: ${skippedCount} libraries (already complete)`);
  console.log(`   ❌ Errors: ${errorCount} libraries`);
  console.log('🎉 Root index.ts migration completed');
}

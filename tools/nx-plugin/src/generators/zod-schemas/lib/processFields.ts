import { BlueField, ModuleBlueIds } from './utils/blueTypes';
import { isNumericKeysObject } from './utils/isNumericKeysObject';
import { generateZodType } from './generateZodType';

/**
 * Formats a field key for use in a Zod schema object.
 * If the key contains spaces or special characters, it will be wrapped in square brackets.
 *
 * @param fieldKey - The field key to format
 * @returns The formatted field key, wrapped in quotes and brackets if necessary
 * @example
 * formatFieldKey('normal') // returns 'normal'
 * formatFieldKey('special key') // returns '['special key']'
 */
function formatFieldKey(fieldKey: string): string {
  return fieldKey.includes(' ') ? `['${fieldKey}']` : fieldKey;
}

/**
 * Processes a tuple-like object with numeric keys into a Zod tuple schema.
 * Handles both direct field definitions and nested objects within the tuple.
 *
 * @param tupleItems - Object with numeric keys representing tuple elements
 * @param blueIds - Collection of Blue IDs from the current module and its parents
 * @param schemaImportMap - Map to track required schema imports
 * @param indentationLevel - Current indentation level for code formatting
 * @param moduleIdentifier - The identifier of the current module
 * @returns A string representing the Zod tuple schema definition
 */
function processTupleItems(
  tupleItems: Record<string, unknown>,
  blueIds: ModuleBlueIds,
  schemaImportMap: Map<string, string>,
  indentationLevel: number,
  moduleIdentifier: string
): string {
  const indentation = '  '.repeat(indentationLevel);
  const processedItems: string[] = [];

  const orderedKeys = Object.keys(tupleItems)
    .map(Number)
    .sort((a, b) => a - b);

  for (const key of orderedKeys) {
    const tupleElement = tupleItems[key.toString()];
    const isBlueFieldType =
      typeof tupleElement === 'object' &&
      tupleElement !== null &&
      'type' in tupleElement &&
      (tupleElement.type as Record<string, unknown>).blueId;

    if (isBlueFieldType) {
      const zodType = generateZodType(
        tupleElement as BlueField,
        blueIds,
        schemaImportMap,
        moduleIdentifier
      );
      processedItems.push(zodType.replace('.optional()', ''));
    } else {
      const nestedFields = processFields(
        tupleElement as Record<string, unknown>,
        blueIds,
        schemaImportMap,
        indentationLevel + 1,
        moduleIdentifier
      );

      processedItems.push(
        nestedFields.length > 0
          ? `z.object({\n${nestedFields.join(',\n')}\n${indentation}})`
          : 'z.unknown()'
      );
    }
  }

  return `z.tuple([${processedItems.join(', ')}])`;
}

const hasOnlySpecialFields = (objectToProcess: Record<string, unknown>) => {
  return Object.keys(objectToProcess).every(
    (key) => key === 'name' || key === 'description'
  );
};

/**
 * Recursively processes an object structure to generate Zod schema field definitions.
 * Handles special fields (name, description), tuple fields, direct field definitions,
 * and nested objects.
 *
 * @param objectToProcess - The object structure to process
 * @param blueIds - Collection of Blue IDs from the current module and its parents
 * @param schemaImportMap - Map to track required schema imports
 * @param indentationLevel - Current indentation level for code formatting (default: 1)
 * @param moduleIdentifier - The identifier of the current module
 * @returns Array of strings representing Zod field definitions
 */
export function processFields(
  objectToProcess: Record<string, unknown>,
  blueIds: ModuleBlueIds,
  schemaImportMap: Map<string, string>,
  indentationLevel = 1,
  moduleIdentifier: string
): string[] {
  const processedFields: string[] = [];
  const indentation = '  '.repeat(indentationLevel);

  // Sort keys alphabetically for deterministic output
  const sortedKeys = Object.keys(objectToProcess).sort((a, b) =>
    a.localeCompare(b)
  );

  for (const fieldKey of sortedKeys) {
    const fieldValue =
      objectToProcess[fieldKey as keyof typeof objectToProcess];

    // Handle primitive special fields deterministically within sorted order
    if (fieldKey === 'name' && typeof fieldValue === 'string') {
      processedFields.push(`${indentation}name: z.string().optional()`);
      continue;
    }
    if (fieldKey === 'description' && typeof fieldValue === 'string') {
      processedFields.push(`${indentation}description: z.string().optional()`);
      continue;
    }

    if (typeof fieldValue === 'object' && fieldValue !== null) {
      const fieldObject = fieldValue as Record<string, unknown>;
      const isTupleField =
        Object.keys(fieldObject).length === 1 &&
        'items' in fieldObject &&
        isNumericKeysObject(fieldObject.items);

      if (hasOnlySpecialFields(fieldObject)) {
        processedFields.push(
          `${indentation}${formatFieldKey(
            fieldKey
          )}: blueNodeField().optional()`
        );
        schemaImportMap.set('blueNodeField', '@blue-labs/language');
        continue;
      }

      if (isTupleField) {
        const tupleType = processTupleItems(
          fieldObject.items as Record<string, unknown>,
          blueIds,
          schemaImportMap,
          indentationLevel,
          moduleIdentifier
        );
        processedFields.push(
          `${indentation}${formatFieldKey(fieldKey)}: ${tupleType}.optional()`
        );
      } else if (
        'type' in fieldObject &&
        fieldObject.type &&
        typeof fieldObject.type === 'object' &&
        (fieldObject.type as Record<string, unknown>).blueId
      ) {
        const zodType = generateZodType(
          fieldValue as BlueField,
          blueIds,
          schemaImportMap,
          moduleIdentifier
        );
        processedFields.push(
          `${indentation}${formatFieldKey(fieldKey)}: ${zodType}`
        );
      } else {
        const nestedFields = processFields(
          fieldObject,
          blueIds,
          schemaImportMap,
          indentationLevel + 1,
          moduleIdentifier
        );

        if (nestedFields.length > 0) {
          processedFields.push(
            `${indentation}${formatFieldKey(
              fieldKey
            )}: z.object({\n${nestedFields.join(
              ',\n'
            )}\n${indentation}}).optional()`
          );
        }
      }
    }
  }

  return processedFields;
}

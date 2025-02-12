// processFields.ts
import { BlueField, ModuleBlueIds } from './utils/blueTypes';
import { isNumericKeysObject } from './utils/isNumericKeysObject';
import { generateZodType } from './generateZodType';

/**
 * If a key has spaces or special chars, wrap in ['key'].
 */
function formatFieldKey(key: string): string {
  return key.includes(' ') ? `['${key}']` : key;
}

/**
 * Process a "tuple" object that has numeric keys, returning something like: z.tuple([ ... ])
 */
function processTupleItems(
  items: Record<string, unknown>,
  blueIds: ModuleBlueIds,
  imports: Map<string, string>,
  indent: number,
  currentModule: string
): string {
  const indentation = '  '.repeat(indent);
  const tupleItems: string[] = [];

  const sortedKeys = Object.keys(items)
    .map(Number)
    .sort((a, b) => a - b);

  for (const key of sortedKeys) {
    const value = items[key.toString()];
    if (
      typeof value === 'object' &&
      value !== null &&
      'type' in value &&
      (value.type as Record<string, unknown>).blueId
    ) {
      // direct field
      const zodType = generateZodType(
        value as BlueField,
        blueIds,
        imports,
        currentModule
      );
      // Tuple items typically are not optional
      tupleItems.push(zodType.replace('.optional()', ''));
    } else {
      // nested object
      const nestedFields = processFields(
        value as Record<string, unknown>,
        blueIds,
        imports,
        indent + 1,
        currentModule
      );
      if (nestedFields.length > 0) {
        tupleItems.push(
          `z.object({\n${nestedFields.join(',\n')}\n${indentation}})`
        );
      } else {
        tupleItems.push('z.unknown()');
      }
    }
  }

  return `z.tuple([${tupleItems.join(', ')}])`;
}

/**
 * Recursively walks the object structure to produce lines for z.object.
 */
export function processFields(
  obj: Record<string, unknown>,
  blueIds: ModuleBlueIds,
  imports: Map<string, string>,
  indent = 1,
  currentModule: string
): string[] {
  const fields: string[] = [];
  const indentation = '  '.repeat(indent);

  // If "name" or "description" exist as strings, treat them
  if (typeof obj.name === 'string') {
    fields.push(`${indentation}name: z.string().optional()`);
  }
  if (typeof obj.description === 'string') {
    fields.push(`${indentation}description: z.string().optional()`);
  }

  // Now check everything else
  for (const [key, value] of Object.entries(obj)) {
    // skip name/description since we handled them above
    if (key === 'name' || key === 'description') {
      continue;
    }

    if (typeof value === 'object' && value !== null) {
      const valObj = value as Record<string, unknown>;

      // If the object has exactly one key: "items", and that is numeric-keys => treat as tuple
      if (
        Object.keys(valObj).length === 1 &&
        'items' in valObj &&
        isNumericKeysObject(valObj.items)
      ) {
        const tupleType = processTupleItems(
          valObj.items as Record<string, unknown>,
          blueIds,
          imports,
          indent,
          currentModule
        );
        fields.push(
          `${indentation}${formatFieldKey(key)}: ${tupleType}.optional()`
        );
      }
      // If it looks like a direct field definition (value.type.blueId)
      else if (
        'type' in valObj &&
        valObj.type &&
        typeof valObj.type === 'object' &&
        (valObj.type as Record<string, unknown>).blueId
      ) {
        const zodType = generateZodType(
          value as BlueField,
          blueIds,
          imports,
          currentModule
        );
        fields.push(`${indentation}${formatFieldKey(key)}: ${zodType}`);
      }
      // Otherwise, treat as a nested object
      else {
        const nestedFields = processFields(
          valObj,
          blueIds,
          imports,
          indent + 1,
          currentModule
        );
        if (nestedFields.length > 0) {
          fields.push(
            `${indentation}${formatFieldKey(
              key
            )}: z.object({\n${nestedFields.join(
              ',\n'
            )}\n${indentation}}).optional()`
          );
        }
      }
    }
  }

  return fields;
}

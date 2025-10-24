export interface BlueField {
  type: { blueId: string };
  description?: string;
  itemType?: { blueId: string };
  keyType?: { blueId: string };
  valueType?: { blueId: string };
}

export interface BlueType {
  name: string;
  description?: string;
  type?: { blueId: string }; // For type inheritance/extension
  [key: string]: unknown; // allow arbitrary nested fields
}

export interface BlueIdInfo {
  typeName: string;
  moduleName: string;
}

/**
 * The structure of "blue-ids.yaml":  { [typeName: string]: string }
 * e.g. { "User": "abc123", "Product": "xyz456" }
 */
export interface BlueIds {
  [typeName: string]: string;
}

/**
 * A dictionary of  { [blueId: string]: BlueIdInfo }
 * so we can look up { typeName, moduleName } by blueId.
 */
export interface ModuleBlueIds {
  [blueId: string]: BlueIdInfo;
}

/**
 * Map known "primitive" blueIds to a standard JS type:
 *  e.g. string, number, boolean, array, record, etc.
 */
export const PRIMITIVE_TYPE_MAP: Record<string, string> = {
  DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K: 'string', // TEXT
  '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y': 'number', // DOUBLE
  '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1': 'number', // INTEGER
  '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u': 'boolean', // BOOLEAN
  '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY': 'array', // LIST
  G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj: 'record', // DICTIONARY
};

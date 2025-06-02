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
  F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP: 'string', // TEXT
  '68ryJtnmui4j5rCZWUnkZ3DChtmEb7Z9F8atn1mBSM3L': 'number', // DOUBLE
  DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8: 'number', // INTEGER
  EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo: 'boolean', // BOOLEAN
  G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB: 'array', // LIST
  '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA': 'record', // DICTIONARY
};

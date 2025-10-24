export const dictionary = {
  description:
    'Object map from keys to values (a plain Blue object node).\n- Object shape (no properties field):\n    detail: >\n      Blue objects are plain maps of field → node; there is no `properties`\n      key in the language (§2, §8.2.4). Dictionary is just an object with\n      typing constraints for its keys/values.\n\n- Why not `value`/`items`:\n    detail: >\n      Dictionary is neither a scalar nor a list wrapper; `value`/`items` are\n      instance wrappers for scalars/lists (§2.1). They do not apply to maps.\n\n- Key typing & serialization:\n    detail: >\n      Keys are serialized using the `keyType`’s canonical textual form. Because\n      JSON member names are strings, non-Text keys are converted to strings\n      (e.g., Integer 42 → "42", Double 1.0 → "1"). Distinct values that map to\n      the same canonical string will collide; authors SHOULD choose a `keyType`\n      that avoids ambiguity for their domain.\n\n- Defaults & compatibility:\n    detail: >\n      `keyType` and `valueType` are OPTIONAL. If `keyType` is omitted, it\n      defaults to Text. If `valueType` is omitted, values may be any Blue node.\n      Subtyping/compatibility must be preserved for both keyType and valueType\n      when present (§4.2).\n\n- Ordering & equality:\n    detail: >\n      Key order is irrelevant for identity (RFC 8785 canonicalization).\n      Equality compares by canonical JSON / BlueId rules.\n\n- Applicable schema:\n    detail: >\n      §5.3 object constraints: minFields, maxFields.\n',
  keyType: {
    description:
      'OPTIONAL. Type for keys. Allowed: Text, Integer, Double, Boolean. Defaults to Text when omitted. Keys serialize via the keyType’s canonical textual form.\n',
  },
  name: 'Dictionary',
  valueType: {
    description:
      'OPTIONAL. Type constraint for values. If omitted, values are unconstrained (any Blue node). If present, each value MUST be equal to or a subtype of valueType (§4.2).\n',
  },
} as const;

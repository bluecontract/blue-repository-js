export const JsonPatchEntry = {
  "name": "Json Patch Entry",
  "description": "Core type of Blue Language v1.0 (see https://language.blue).\nDeterministic subset of RFC 6902 used by handlers to request document changes.\n",
  "op": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "One of add, replace, remove."
  },
  "path": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Absolute JSON Pointer within the document (must begin with \"/\")."
  },
  "val": {
    "description": "Payload for add and replace (any Blue node). Omitted for remove."
  }
} as const;

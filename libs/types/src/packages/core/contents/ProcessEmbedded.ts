export const ProcessEmbedded = {
  "name": "Process Embedded",
  "type": {
    "blueId": "7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6"
  },
  "description": "Core type of Blue Language v1.0 (see https://language.blue).\nDeclares embedded child scopes beneath the current scope. The processor reads\nthis list dynamically and re-reads after each child finishes.\n",
  "paths": {
    "type": {
      "blueId": "6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY"
    },
    "itemType": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Scope-relative absolute pointers to child roots (strings beginning with \"/\",\nresolved against the current scope).\n"
  }
} as const;

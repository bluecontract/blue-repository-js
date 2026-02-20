export const SearchContract = {
  description:
    'Marker contract that describes how a document should project search fields\nfor indexing (`q`, `kv`, `geo`). Paths must follow BlueNode.get(path)\nsemantics and be absolute.\n',
  geo: {
    description: 'Absolute source paths for latitude/longitude extraction.',
    lat: {
      description: 'Absolute path to latitude value.',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
    lon: {
      description: 'Absolute path to longitude value.',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
  },
  kv: {
    description:
      'Map of index key -> absolute source path for `kv.<key>` extraction.',
    keyType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
    valueType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Search Contract',
  q: {
    description:
      'Absolute paths whose extracted values should be appended to the indexed `q` text.',
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  type: {
    blueId: '7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6',
  },
} as const;

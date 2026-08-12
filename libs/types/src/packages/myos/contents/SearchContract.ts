export const SearchContract: Record<string, unknown> = {
  description:
    'Marker contract that describes how a document should project search fields\nfor indexing (`q`, `kv`, `geo`). Paths must follow BlueNode.get(path)\nsemantics and be absolute.\n',
  geo: {
    description: 'Absolute source paths for latitude/longitude extraction.',
    lat: {
      description: 'Absolute path to latitude value.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    lon: {
      description: 'Absolute path to longitude value.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
  },
  kv: {
    description:
      'Map of index key -> absolute source path for `kv.<key>` extraction.',
    keyType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
    valueType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Search Contract',
  q: {
    description:
      'Absolute paths whose extracted values should be appended to the indexed `q` text.',
    itemType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  type: {
    blueId: '8nWeksYEXxp5TBnRcYF5u3VsFHvMfxo4zjAFT6MLW8ZD',
  },
};

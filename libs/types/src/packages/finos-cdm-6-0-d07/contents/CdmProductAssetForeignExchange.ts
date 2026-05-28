export const CdmProductAssetForeignExchange = {
  description:
    'From FpML: A type defining either a spot or forward FX transactions.\n',
  exchangedCurrency1: {
    description:
      'This is the first of the two currency flows that define a single leg of a standard foreign exchange transaction.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'HSzaYj4NHo8yQEzxs9i6136jxrgSGM3ETvCGRjWRNBbe',
    },
  },
  exchangedCurrency2: {
    description:
      'This is the second of the two currency flows that define a single leg of a standard foreign exchange transaction.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'HSzaYj4NHo8yQEzxs9i6136jxrgSGM3ETvCGRjWRNBbe',
    },
  },
  name: 'cdm/product/asset/ForeignExchange',
  tenorPeriod: {
    description:
      'A tenor expressed as a period type and multiplier (e.g. 1D, 1Y, etc.)',
    type: {
      blueId: '5rdYwkwGdndCoYmQi9MNzw9SKQZsr68igDgyYFgvNzmh',
    },
  },
} as const;

export const CdmProductAssetForeignExchange: Record<string, unknown> = {
  description:
    'From FpML: A type defining either a spot or forward FX transactions.\n',
  exchangedCurrency1: {
    description:
      'This is the first of the two currency flows that define a single leg of a standard foreign exchange transaction.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '3vRMCGh2M3Ggi4kWVbmZ85TLuo1A54NFwDCbhvAZt9XA',
    },
  },
  exchangedCurrency2: {
    description:
      'This is the second of the two currency flows that define a single leg of a standard foreign exchange transaction.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '3vRMCGh2M3Ggi4kWVbmZ85TLuo1A54NFwDCbhvAZt9XA',
    },
  },
  name: 'cdm/product/asset/ForeignExchange',
  tenorPeriod: {
    description:
      'A tenor expressed as a period type and multiplier (e.g. 1D, 1Y, etc.)',
    type: {
      blueId: 'G5BwzTWEaA14NoPKn8iSwCnmwnWuQegPHZwrpgagS6kY',
    },
  },
};

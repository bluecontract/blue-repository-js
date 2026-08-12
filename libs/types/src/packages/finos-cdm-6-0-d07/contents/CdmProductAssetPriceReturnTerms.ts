export const CdmProductAssetPriceReturnTerms: Record<string, unknown> = {
  conversionFactor: {
    description:
      'Defines the conversion applied if the quantity unit on contract is different from unit on referenced underlier.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/product/asset/PriceReturnTerms',
  performance: {
    description:
      "Performance calculation, in accordance with Part 1 Section 12 of the 2018 ISDA CDM Equity Confirmation for Security Equity Swap, Para 75. 'Equity Performance'. Cumulative performance is used as a notional multiplier factor on both legs of an Equity Swap.\n",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  returnType: {
    description: 'The type of return associated with the equity swap.',
    schema: {
      required: true,
    },
    type: {
      blueId: '3fgHuNXJoi7veV1sJapyuahexc4gzfBdPJ5JVBdUSiHn',
    },
  },
};

export const CdmObservableAssetMultipleCreditNotations: Record<
  string,
  unknown
> = {
  condition: {
    description:
      'An enumerated element, to qualify whether All or Any credit notation applies.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9rM943Zxj8XaBwwWtrihnmzqSxuoYsj5tqms4JHHt3AG',
    },
  },
  creditNotation: {
    description: 'At least two credit notations much be specified.',
    itemType: {
      blueId: 'vj6R4UJLxafVvD4Kb6AZG34BntgoTm9445T8cscNBEE',
    },
    schema: {
      minItems: 2,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    "Represetns a class to specify multiple credit notations alongside a conditional 'any' or 'all' qualifier.",
  mismatchResolution: {
    type: {
      blueId: '3xGR5MinWeBBiGacxvPvEYBQ4EV4NjiAp6xvgENeLDVe',
    },
  },
  name: 'cdm/observable/asset/MultipleCreditNotations',
  referenceAgency: {
    type: {
      blueId: '21xGvoNnChKXaDXVNTEgYY1eJr849T5okU3aXsrCK2PB',
    },
  },
};

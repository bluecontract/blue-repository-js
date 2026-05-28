export const CdmProductAssetReferencePoolItem = {
  cashSettlementTermsReference: {
    description:
      'Reference to the cash settlement terms applicable to this item.',
    type: {
      blueId: 'Eud1PpiZWvCUx1fnCMC8CwsLqPdmoGhibUuZ6Xrxayic',
    },
  },
  constituentWeight: {
    description:
      'Describes the weight of each of the constituents within the basket. If not provided, it is assumed to be equal weighted.\n',
    type: {
      blueId: 'AfmdCkcHzUmPq2oxE9uum8nnnL5nm62GZ5s2wsr1oobp',
    },
  },
  description:
    'This type contains all the constituent weight and reference information.',
  name: 'cdm/product/asset/ReferencePoolItem',
  physicalSettlementTermsReference: {
    description:
      'Reference to the physical settlement terms applicable to this item.',
    type: {
      blueId: 'AZ5TAtN5poY1sFC8CQEDKukTVaTP7itawDyHn3a1MtBq',
    },
  },
  protectionTermsReference: {
    description:
      'Reference to the documentation terms applicable to this item.',
    type: {
      blueId: '5F15MHyVL82YVLdpKtyeyJTtHvbHtqQDKZj8NkhWm8hd',
    },
  },
  referencePair: {
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'C44nC78rjDLbXVjfppMUZMnRAhZJU9me93bNLYMajtUz',
    },
  },
} as const;

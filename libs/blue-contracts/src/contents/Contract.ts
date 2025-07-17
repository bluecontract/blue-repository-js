export const contract = {
  name: 'Contract',
  description: '(full documentation goes here)',
  subscriptions: {
    type: {
      blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
    },
    itemType: {
      blueId: 'BnzvPoTRbeT8JmH6rDn3Sh9f2gfCNBTm58WVxdUcorXr',
    },
  },
  workflows: {
    description: 'workflows part',
    type: {
      blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
    },
    itemType: {
      blueId: 'Fq9xM7HgfQRq2zZWc2mKMXBhbwADtBBtas7y9FTRuyvb',
    },
  },
  properties: {
    description: 'properties part',
  },
  messaging: {
    secureChannel: {
      description: 'channel part',
    },
    participants: {
      type: {
        blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
      },
      keyType: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
      valueType: {
        blueId: 'ATbZ8UAASUy2PaooqZx6CE9giEfKcvrs3nQPcK5jTmBJ',
      },
    },
  },
} as const;

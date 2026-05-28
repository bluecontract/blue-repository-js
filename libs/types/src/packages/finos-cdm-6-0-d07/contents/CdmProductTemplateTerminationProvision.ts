export const CdmProductTemplateTerminationProvision = {
  cancelableProvision: {
    description:
      'A provision that allows the specification of an embedded option within a swap giving the buyer of the option the right to terminate the swap, in whole or in part, on the early termination date.\n',
    type: {
      blueId: 'CmrgcyG3eBXu1VywrDkV1pqtQ2sRfaYXfDqFSuPDN6Qh',
    },
  },
  description: 'A class for defining option provisions.',
  earlyTerminationProvision: {
    description:
      'Parameters specifying provisions relating to the optional and mandatory early termination of a swap transaction.\n',
    type: {
      blueId: 'ATdAeszcXw1uFWsWdnzsyBx1vs22fznFDA5f664ZSGnW',
    },
  },
  evergreenProvision: {
    description:
      'A data defining: the right of a party to exercise an Evergreen option\n',
    type: {
      blueId: 'HRvhJg5k7JKhCKUjPBe3dA2sJs8mUa8XXAKisLbesC3m',
    },
  },
  extendibleProvision: {
    description:
      'A provision that allows the specification of an embedded option with a swap giving the buyer of the option the right to extend the swap, in whole or in part, to the extended termination date.\n',
    type: {
      blueId: 'X7icfoV6dj3szD5tQnt8vHJD7WqBQ86TXpN5cDpvPu7',
    },
  },
  name: 'cdm/product/template/TerminationProvision',
} as const;

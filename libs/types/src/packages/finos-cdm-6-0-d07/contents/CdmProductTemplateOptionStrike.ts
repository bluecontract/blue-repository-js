export const CdmProductTemplateOptionStrike = {
  averagingStrikeFeature: {
    description:
      'Defines an  option strike that is calculated from an average of observed market prices.',
    type: {
      blueId: '2ivieRnuYvgJa1vamkzsA1moey8Co6QwbcHzZLJtw432',
    },
  },
  description: 'Defines the strike price of an option.',
  name: 'cdm/product/template/OptionStrike',
  referenceSwapCurve: {
    description:
      'Defines the strike of an option when expressed by reference to a swap curve (Typically the case for a convertible bond option).\n',
    type: {
      blueId: '3ePuoisseC1LPtuzJDr9A1SpUkuyfzKiDPwFQS4DtH7h',
    },
  },
  strikePrice: {
    description:
      'Defines the strike of an option in the form of a price that could be a cash price, interestRate, or other types.\n',
    type: {
      blueId: 'wuC3RHpv6ahucWwxTgdeQyeUP8ecWQQqgMvSpx3Z543',
    },
  },
  strikeReference: {
    description:
      'Defines the strike of an option in reference to the spread of the underlying swap (typical practice in the case of an option on a credit single name swaps).\n',
    type: {
      blueId: 'BBgcbEXC2m59J1z1f2zctaxNzuEUosaMi3HLNPPMLwAt',
    },
  },
} as const;

export const CdmProductTemplateOptionStrike: Record<string, unknown> = {
  averagingStrikeFeature: {
    description:
      'Defines an  option strike that is calculated from an average of observed market prices.',
    type: {
      blueId: 'HxYQ9z6xDVRw63wB5M3kiknebJ9fvTEFsXwtbJPtXRRD',
    },
  },
  description: 'Defines the strike price of an option.',
  name: 'cdm/product/template/OptionStrike',
  referenceSwapCurve: {
    description:
      'Defines the strike of an option when expressed by reference to a swap curve (Typically the case for a convertible bond option).\n',
    type: {
      blueId: '2sDB91wA63tF5EXtQR9UbQQnyGu7CqG5AHbYURVxLHNc',
    },
  },
  strikePrice: {
    description:
      'Defines the strike of an option in the form of a price that could be a cash price, interestRate, or other types.\n',
    type: {
      blueId: 'GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm',
    },
  },
  strikeReference: {
    description:
      'Defines the strike of an option in reference to the spread of the underlying swap (typical practice in the case of an option on a credit single name swaps).\n',
    type: {
      blueId: '9MuxTNnqdBfc2jXWLVxrcXeAQkmmc3aoj2AuNQ46RBnh',
    },
  },
};

export const CdmProductAssetGeneralTerms = {
  additionalTerm: {
    description:
      'This attribute is used for representing information contained in the Additional Terms field of the 2003 Master Credit Derivatives confirm.\n',
    itemType: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  basketReferenceInformation: {
    description:
      'This attribute contains all the terms relevant to defining the Credit Default Swap Basket.',
    type: {
      blueId: '2hzofepdHmrqpLHQwtRqdcJ6PoT2WXfk69YAGwBuwZhX',
    },
  },
  description:
    'A class specifying a set of non-monetary terms for the Credit Derivative Transaction, including the buyer and seller and selected items from the ISDA 2014 Credit Definition article II, such as the reference obligation and related terms. The CDM GeneralTerms class corresponds to the FpML GeneralTerms complex type, except that the effectiveDate and scheduledTerminationDate have been positioned as part of the InterestRatePayout class in the CDM instead of in GeneralTerms.\n',
  indexReferenceInformation: {
    description:
      'This attribute contains all the terms relevant to the underlying Index.',
    type: {
      blueId: 'DEx8mELrNiMvJnmN1WRhZbyCiZRmtgBjuJXyfcSztf4h',
    },
  },
  modifiedEquityDelivery: {
    description:
      "Value of this attribute set to 'true' indicates that modified equity delivery is applicable.",
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/product/asset/GeneralTerms',
  referenceInformation: {
    description:
      'This attribute contains all the terms relevant to defining the reference entity and reference obligation(s).',
    type: {
      blueId: 'HDWPv3g9U1KUdNNbF554aWveShvcV6UnPnH8HQGqtppM',
    },
  },
  substitution: {
    description:
      "Value of this attribute set to 'true' indicates that substitution is applicable.",
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
} as const;

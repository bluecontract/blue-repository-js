export const CdmLegaldocumentationMasterExtraordinaryEvents = {
  additionalBespokeTerms: {
    description:
      'Where parties may optionnaly describe any extra bespoke agreements, in regards of the standardized Extraordinary Events.\n',
    itemType: {
      blueId: '44Vi7jQyj5Xitt2LqNBTBiKbLULnniytnNKHM2Q27NFs#0',
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
  additionalDisruptionEvents: {
    description:
      'Per the 2002 ISDA Equity Derivatives Definitions | 2018 ISDA CDM Equity Confirmation for Security Equity Swaps',
    type: {
      blueId: 'EWRf98rx4nuLswzBWueTYEraywCRrEzoC9xLLRZXEinG',
    },
  },
  compositionOfCombinedConsideration: {
    description: 'Per the 2002 ISDA Equity Derivatives Definitions:',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  delisting: {
    description:
      'Per the 2002 ISDA Equity Derivatives Definitions | 2018 ISDA CDM Equity Confirmation for Security Equity Swap:',
    type: {
      blueId: '8msnyrNccCP7gT7FBgDZjFm4uqHXKgBd3d78zcAtFrBu',
    },
  },
  description:
    'Where the underlying is shares, defines market events affecting the issuer of those shares that may require the terms of the transaction to be adjusted.\n',
  failureToDeliver: {
    description: 'If true, failure to deliver is applicable.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  indexAdjustmentEvents: {
    description:
      'Per the 2002 ISDA Equity Derivatives Definitions: Adjustments to Indices\n',
    type: {
      blueId: '7JpyU9NCehqGC5gStraNS8fct7zmgk7CRM3sBXoxQPwD',
    },
  },
  mergerEvents: {
    description:
      'Per the 2018 ISDA CDM Equity Confirmation for Security Equity Swap',
    type: {
      blueId: '8eyJdEjEPGbFnR2mLmiXtvsj5zsq51J2BKrRERr4rfQH',
    },
  },
  name: 'cdm/legaldocumentation/master/ExtraordinaryEvents',
  nationalizationOrInsolvency: {
    description:
      'Per the 2002 ISDA Equity Derivatives Definitions | 2018 ISDA CDM Equity Confirmation for Security Equity Swap',
    type: {
      blueId: '8msnyrNccCP7gT7FBgDZjFm4uqHXKgBd3d78zcAtFrBu',
    },
  },
  representations: {
    type: {
      blueId: 'BNwNQ6TkYDn3nzSVHofp2yxshKNkpDVyyKJASA2mjKaN',
    },
  },
  tenderOfferEvents: {
    description: 'Per the 2002 ISDA Equity Derivatives Definitions:',
    type: {
      blueId: '8eyJdEjEPGbFnR2mLmiXtvsj5zsq51J2BKrRERr4rfQH',
    },
  },
} as const;

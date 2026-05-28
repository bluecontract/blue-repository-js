export const CdmLegaldocumentationMasterAdditionalDisruptionEvents = {
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
  changeInLaw: {
    description: 'Per 2002 ISDA Equity Derivatives Definitions:',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  description: 'A type for defining the Additional Disruption Events.',
  determiningParty: {
    description:
      'Specifies the party which determines additional disruption events.',
    type: {
      blueId: '6Z3jsP3QVXumTdQMGZVcCDRNn3n62xjfZLNEHaZeDWmb',
    },
  },
  failureToDeliver: {
    description: 'Per 2002 ISDA Equity Derivatives Definitions',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  foreignOwnershipEvent: {
    description: 'Per ISDA Def',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  hedgingDisruption: {
    description: 'Per 2002 ISDA Equity Derivatives Definitions',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  increasedCostOfHedging: {
    description: 'Per 2002 ISDA Equity Derivatives Definitions',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  increasedCostOfStockBorrow: {
    description: 'Per 2002 ISDA Equity Derivatives Definitions',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  initialStockLoanRate: {
    description:
      'Specifies the initial stock loan per ISDA Def. A percentage of 5% is represented as 0.05.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  insolvencyFiling: {
    description: 'Per 2002 ISDA Equity Derivatives Definitions',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  lossOfStockBorrow: {
    description: 'Per 2002 ISDA Equity Derivatives Definitions:',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  maximumStockLoanRate: {
    description:
      'Specifies the maximum stock loan rate for Loss of Stock Borrow. A percentage of 5% is represented as 0.05.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  name: 'cdm/legaldocumentation/master/AdditionalDisruptionEvents',
} as const;

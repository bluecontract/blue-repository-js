export const CdmProductCollateralCollateralInterestCalculationParameters = {
  compoundingBusinessCenter: {
    description: 'Specifies the applicable business centers for compounding.',
    itemType: {
      blueId: 'T68z84ntdBb19juBApDyMAndAVUzzmotTGUTuJnHV3D',
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
  compoundingType: {
    description:
      'Specifies the type of compounding to be applied (None, Business, Calendar).',
    type: {
      blueId: '5ojsHNF1jNcdgizZKEHoVtM4tCrpwCnSYbccLWJLnS5A',
    },
  },
  dayCountFraction: {
    description: 'Specifies the day count fraction to use for that currency.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'Gg7yf6CJg1QvGhkZFmdUsZR7t1wfdN4PpLPrymefw2Yx',
    },
  },
  description:
    'Represents parameters for calculating the amount the floating interest calculation, e.g.  for a single currency or defaults for all currencies.\n',
  fixedRate: {
    description: 'Specifies the applicable fixed rate  if used.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  floatingRate: {
    description: 'Specifies the floating interest rate to be used.',
    type: {
      blueId: 'CmSrznzVLE1Cqum7Xx5TArrxUTDcNSUH9UDm1PLDZWeB',
    },
  },
  inBaseCurrency: {
    description:
      'If True, specifies that the interest transfers should be converted to base currency equivalent, or if False specifies that the transfer should be in the currency of the collateral.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/product/collateral/CollateralInterestCalculationParameters',
  rounding: {
    description: 'Specifies the rounding rules for settling in that currency.',
    type: {
      blueId: 'ArfQ58kSzN4QkRNkhhMYbmgBrEGPrnnSSA4sgC1Stoho',
    },
  },
  roundingFrequency: {
    description: 'Specifies when/how often is rounding applied?',
    type: {
      blueId: 'HsMcUzdZLtswDJ9XExanUTbjYaQ6n5UmH2JZ7RQkHNzR',
    },
  },
  withholdingTaxRate: {
    description:
      'Specifies the withholding tax rate if a withholding tax is applicable.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;

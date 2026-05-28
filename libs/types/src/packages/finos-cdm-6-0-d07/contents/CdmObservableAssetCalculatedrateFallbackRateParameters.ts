export const CdmObservableAssetCalculatedrateFallbackRateParameters = {
  calculationParameters: {
    description:
      'Support for modular calculated rates, such such as lockout compound calculations.',
    type: {
      blueId: 'B7KJroezbBh48oEcEjQn6jGLYdXUKPwEMnSuKkCujhV8',
    },
  },
  description:
    'Defines the structure needed to represent fallback rate parameters. This type is used to represent modular computed rates in interestRatePayouts.\n',
  effectiveDate: {
    description: 'The date the fallback rate takes effect.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  floatingRateIndex: {
    description:
      'The floating rate index that is used as the basis of the fallback rate.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'AygoLHtsrgUkWFxjVtQsDYzEn5EbXUEt8avHzLQsUUVZ',
    },
  },
  name: 'cdm/observable/asset/calculatedrate/FallbackRateParameters',
  spreadAdjustment: {
    description:
      'The economic spread applied to the underlying fallback rate to replicate the original risky rate.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;

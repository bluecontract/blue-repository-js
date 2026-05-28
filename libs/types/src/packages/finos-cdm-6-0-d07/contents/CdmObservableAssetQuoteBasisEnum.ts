export const CdmObservableAssetQuoteBasisEnum = {
  description:
    'The enumerated values to specify how an exchange rate is quoted.',
  name: 'cdm/observable/asset/QuoteBasisEnum',
  schema: {
    enum: {
      items: [
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'Currency1PerCurrency2',
        },
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'Currency2PerCurrency1',
        },
      ],
    },
  },
  type: {
    blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
  },
} as const;

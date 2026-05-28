export const CdmProductAssetNonCashDividendTreatmentEnum = {
  description:
    'The enumerated values to specify the treatment of Non-Cash Dividends.',
  name: 'cdm/product/asset/NonCashDividendTreatmentEnum',
  schema: {
    enum: {
      items: [
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'CashEquivalent',
        },
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'PotentialAdjustmentEvent',
        },
      ],
    },
  },
  type: {
    blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
  },
} as const;

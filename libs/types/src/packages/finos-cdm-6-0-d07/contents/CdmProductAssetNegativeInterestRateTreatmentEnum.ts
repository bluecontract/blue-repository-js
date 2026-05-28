export const CdmProductAssetNegativeInterestRateTreatmentEnum = {
  description:
    'The enumerated values to specify the method of calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate).\n',
  name: 'cdm/product/asset/NegativeInterestRateTreatmentEnum',
  schema: {
    enum: {
      items: [
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'NegativeInterestRateMethod',
        },
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'ZeroInterestRateExcludingSpreadMethod',
        },
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'ZeroInterestRateMethod',
        },
      ],
    },
  },
  type: {
    blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
  },
} as const;

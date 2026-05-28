export const CdmBaseMathAveragingWeightingMethodEnum = {
  description:
    'The enumerated values to specify the method of calculation to be used when averaging rates. Per ISDA 2000 Definitions, Section 6.2. Certain Definitions Relating to Floating Amounts.\n',
  name: 'cdm/base/math/AveragingWeightingMethodEnum',
  schema: {
    enum: {
      items: [
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'Unweighted',
        },
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'Weighted',
        },
      ],
    },
  },
  type: {
    blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
  },
} as const;

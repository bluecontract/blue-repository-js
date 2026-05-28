export const CdmProductAssetDiscountingMethod = {
  description:
    'A data defining:  discounting information. The 2000 ISDA definitions, section 8.4. discounting (related to the calculation of a discounted fixed amount or floating amount) apply. This type must only be included if discounting applies.\n',
  discountingType: {
    description: 'The discounting method that is applicable.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7BRQPc5ga1LQPaFUJpmc5huifPeUuZvVsyovgsxm1TSx',
    },
  },
  discountRate: {
    description:
      'A discount rate, expressed as a decimal, to be used in the calculation of a discounted amount. A discount amount of 5% would be represented as 0.05.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  discountRateDayCountFraction: {
    description:
      'A discount day count fraction to be used in the calculation of a discounted amount.',
    type: {
      blueId: '5Dtu3pEFyiD2KsqxowhubHTHw758PbJQU3gY7JfV51ou',
    },
  },
  name: 'cdm/product/asset/DiscountingMethod',
} as const;

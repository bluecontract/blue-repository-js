export const CdmProductAssetDiscountingMethod: Record<string, unknown> = {
  description:
    'A data defining:  discounting information. The 2000 ISDA definitions, section 8.4. discounting (related to the calculation of a discounted fixed amount or floating amount) apply. This type must only be included if discounting applies.\n',
  discountingType: {
    description: 'The discounting method that is applicable.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'EbjHFpZTcuFSaUzQnoeLBnQ5parZksPwCnkTUkahrgmy',
    },
  },
  discountRate: {
    description:
      'A discount rate, expressed as a decimal, to be used in the calculation of a discounted amount. A discount amount of 5% would be represented as 0.05.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  discountRateDayCountFraction: {
    description:
      'A discount day count fraction to be used in the calculation of a discounted amount.',
    type: {
      blueId: '587iDHMkRt71kZVCzE5o3zXzWprHzypcRd91TYbQnSpE',
    },
  },
  name: 'cdm/product/asset/DiscountingMethod',
};

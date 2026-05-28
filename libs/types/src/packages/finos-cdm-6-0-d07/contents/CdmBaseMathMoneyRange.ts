export const CdmBaseMathMoneyRange = {
  description:
    'The money range defined as either a lower and upper money bound, or both.',
  lowerBound: {
    description:
      'The lower bound of a money range, e.g. greater than or equal to 1,000 USD.',
    type: {
      blueId: 'HqUegcGfdAEK5srxpQGsXa5P43vCM9hADmhrJX7ii9fi',
    },
  },
  name: 'cdm/base/math/MoneyRange',
  upperBound: {
    description: 'The upper bound of a money range, e.g. less than 10,000 USD.',
    type: {
      blueId: 'HqUegcGfdAEK5srxpQGsXa5P43vCM9hADmhrJX7ii9fi',
    },
  },
} as const;

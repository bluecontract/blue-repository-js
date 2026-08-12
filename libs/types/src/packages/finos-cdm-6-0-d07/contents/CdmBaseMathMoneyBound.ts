export const CdmBaseMathMoneyBound: Record<string, unknown> = {
  description:
    'The money bound is defined as a money amount and whether the bound is inclusive.',
  inclusive: {
    description:
      'Whether the money amount bound is inclusive, e.g. for a lower bound, false would indicate greater than, whereas true would indicate greater than or equal to.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  money: {
    description: 'The money amount to be used as the bound, e.g. 1,000 USD.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  name: 'cdm/base/math/MoneyBound',
};

export const CdmProductCollateralInterestAmountApplication: Record<
  string,
  unknown
> = {
  deliveryAmount: {
    description:
      'The application of Interest Amount with respect the Delivery Amount.',
    schema: {
      required: true,
    },
    type: {
      blueId: '6r2vj9zxbYnH1oH2iVbRh9Svy77PVCBArmP4WEUVjekp',
    },
  },
  description:
    'A class to specify the application of Interest Amount with respect to the Delivery Amount and the Return Amount.\n',
  name: 'cdm/product/collateral/InterestAmountApplication',
  returnAmount: {
    description:
      'The application of Interest Amount with respect the Return Amount.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HpBh6DxVn5k45kpY9oDbqGhBWE3eEphzgwottdc68x3B',
    },
  },
};

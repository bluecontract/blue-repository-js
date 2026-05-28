export const CdmProductCollateralInterestAmountApplication = {
  deliveryAmount: {
    description:
      'The application of Interest Amount with respect the Delivery Amount.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '8WSVgLvQLqBZPfmneqoMN3uQVAz6N5xkrPQBmDUkzdzX',
    },
  },
  description:
    'A class to specify the application of Interest Amount with respect to the Delivery Amount and the Return Amount.\n',
  name: 'cdm/product/collateral/InterestAmountApplication',
  returnAmount: {
    description:
      'The application of Interest Amount with respect the Return Amount.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'F5KpA82QSi1KJJu5Y1QFYm3KVvYrsajy5CANvijdTquA',
    },
  },
} as const;

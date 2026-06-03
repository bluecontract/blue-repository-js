export const CdmProductCollateralAverageTradingVolume: Record<string, unknown> =
  {
    description:
      'Represents the average trading volume of an Equity product upon an exchange or set of exchanges.',
    methodology: {
      description:
        'Indicates the type of equity average trading volume being stated (single) the highest amount on one exchange, or (consolidated) volumes across multiple exchanges.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: '9ievDTbZij3cJJ9jg1P1QCr6ezKnnV7LPCaYa9ghiPQK',
      },
    },
    name: 'cdm/product/collateral/AverageTradingVolume',
    period: {
      description:
        'Represents the period of the equities average trading volume on the exchange/s.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'G5BwzTWEaA14NoPKn8iSwCnmwnWuQegPHZwrpgagS6kY',
      },
    },
  };

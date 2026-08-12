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
        blueId: '7LAKR8WGxD9yDgWZLh76RT1z1M17gzWirhryZjYVaoMQ',
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
        blueId: '2eRPMxKZ8upfUGCDqNY6xXko7GTGvozudp1i9wznQmXL',
      },
    },
  };

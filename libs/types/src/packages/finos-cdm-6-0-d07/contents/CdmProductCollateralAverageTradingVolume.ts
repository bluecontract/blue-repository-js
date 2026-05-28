export const CdmProductCollateralAverageTradingVolume = {
  description:
    'Represents the average trading volume of an Equity product upon an exchange or set of exchanges.',
  methodology: {
    description:
      'Indicates the type of equity average trading volume being stated (single) the highest amount on one exchange, or (consolidated) volumes across multiple exchanges.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DBtNQnoS2ASiapYrVYocF4KmKjybYa5xQcvCQqGs2B69',
    },
  },
  name: 'cdm/product/collateral/AverageTradingVolume',
  period: {
    description:
      'Represents the period of the equities average trading volume on the exchange/s.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5rdYwkwGdndCoYmQi9MNzw9SKQZsr68igDgyYFgvNzmh',
    },
  },
} as const;

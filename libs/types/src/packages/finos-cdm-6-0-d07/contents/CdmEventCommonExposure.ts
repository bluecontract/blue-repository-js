export const CdmEventCommonExposure: Record<string, unknown> = {
  aggregateValue: {
    description:
      'Represents the aggregate value of the portfolio in base currency.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  calculationDateTime: {
    description:
      'Indicates the date when the exposure is calculated if different from valuation date.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Represents the current mark to market value or IM calculation value of the trade portfolio as recorded by the principle (in base currency).\n',
  name: 'cdm/event/common/Exposure',
  tradePortfolio: {
    description:
      'Represents a Portfolio that describes all the positions held at a given time, in various states which can be either traded, settled, etc., with lineage information to the previous state.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'FiGnX5GAARt1cJzgo4BT3oAxDUqkYktySnbp28d47HxS',
    },
  },
  valuationDateTime: {
    description:
      'Indicates the valuation date of the exposure underlying the calculation.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};

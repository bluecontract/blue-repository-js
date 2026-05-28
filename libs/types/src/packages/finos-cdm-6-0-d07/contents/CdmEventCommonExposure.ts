export const CdmEventCommonExposure = {
  aggregateValue: {
    description:
      'Represents the aggregate value of the portfolio in base currency.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  calculationDateTime: {
    description:
      'Indicates the date when the exposure is calculated if different from valuation date.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Represents the current mark to market value or IM calculation value of the trade portfolio as recorded by the principle (in base currency).\n',
  name: 'cdm/event/common/Exposure',
  tradePortfolio: {
    description:
      'Represents a Portfolio that describes all the positions held at a given time, in various states which can be either traded, settled, etc., with lineage information to the previous state.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '8ahLvM8228zmLQwX87iqop1DsD6pV5ZmzmGw6VQ6cL3j',
    },
  },
  valuationDateTime: {
    description:
      'Indicates the valuation date of the exposure underlying the calculation.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;

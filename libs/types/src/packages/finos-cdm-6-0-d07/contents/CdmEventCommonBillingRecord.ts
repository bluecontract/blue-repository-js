export const CdmEventCommonBillingRecord = {
  description: 'Specifies individual records within a billing invoice.',
  minimumFee: {
    description:
      'Indicates the minimum fee amount applied to the billing record, if any.',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  name: 'cdm/event/common/BillingRecord',
  recordEndDate: {
    description: 'The ending date of the period described by this record',
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
  recordStartDate: {
    description: 'The starting date of the period described by this record',
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
  recordTransfer: {
    description: 'The settlement terms for the billing record',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '98eFnr7F52GRnD9gADRtEuqZMPpuZCmesaDMrQ7wS8Xk',
    },
  },
  tradeState: {
    description: 'The trade for the individual billing record.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DXhfNgQ1Hmipx5YJVPFZLYTAfk5vomh4ywYmSZX1ChyJ',
    },
  },
} as const;

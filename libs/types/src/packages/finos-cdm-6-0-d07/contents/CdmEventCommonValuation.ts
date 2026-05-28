export const CdmEventCommonValuation = {
  amount: {
    description: 'Current value of the outstanding contract',
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
  delta: {
    description:
      'The ratio of the change in the price of a derivative transaction to the change in the price of the underlying. This field is applicable only to options and swaptions.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  description: 'Defines the value of an investment, asset, or security',
  method: {
    description:
      'Method used for the valuation of the transaction by the valuation party.',
    type: {
      blueId: '6d1G7oKbQHMycN2DpoiwfRUVYVHqAbkSg12MQas8Qbc5',
    },
  },
  name: 'cdm/event/common/Valuation',
  priceComponent: {
    description: 'Denotes the price used to compute the valuation.',
    type: {
      blueId: 'wuC3RHpv6ahucWwxTgdeQyeUP8ecWQQqgMvSpx3Z543',
    },
  },
  source: {
    description:
      'Source of the valuation of the transaction by the valuation party.',
    type: {
      blueId: '3qgdUWu7raBQuXg5poKvwjaHsLprDJhjEdxa8ZcXbCMD',
    },
  },
  timestamp: {
    description:
      'Date and time of the last valuation marked to market, provided by the central counterparty (CCP) or calculated using the current or last available market price of the inputs.\n',
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
  valuationTiming: {
    description:
      'Denotes when the valuation was sourced during a business day.',
    type: {
      blueId: 'AfmZhLuxXWB5bhr9ojzoNAja5XJ5XKyWjjKQdzhS4tvs',
    },
  },
} as const;

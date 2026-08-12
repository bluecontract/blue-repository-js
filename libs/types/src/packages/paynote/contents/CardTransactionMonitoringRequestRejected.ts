export const CardTransactionMonitoringRequestRejected: Record<string, unknown> =
  {
    description: 'Notification that card transaction monitoring was rejected.',
    events: {
      itemType: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    name: 'Card Transaction Monitoring Request Rejected',
    reason: {
      description: 'Reason monitoring was rejected.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    rejectedAt: {
      description:
        'Timestamp (microseconds since epoch) when monitoring was rejected.',
      type: {
        blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
      },
    },
    targetMerchantId: {
      description: 'External merchant identifier requested for monitoring.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    type: {
      blueId: '283zu1pu97gXBs4mquE3MSjwRYTzZSXZhnRSemCH8mZr',
    },
  };

export const StartCardTransactionMonitoringRequested: Record<string, unknown> =
  {
    description:
      'Request to start monitoring card events for a target merchant.',
    events: {
      description:
        'Requested card event categories.\nFor now:\n- transaction\n',
      itemType: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    name: 'Start Card Transaction Monitoring Requested',
    requestedAt: {
      description: 'Timestamp (microseconds since epoch).',
      type: {
        blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
      },
    },
    targetMerchantId: {
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    type: {
      blueId: '67WiBLmgNLGfxz7EcReXicgopEBUqYcX6mFGe6YRXatw',
    },
  };

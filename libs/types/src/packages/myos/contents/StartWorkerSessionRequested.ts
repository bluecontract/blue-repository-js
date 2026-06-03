export const StartWorkerSessionRequested: Record<string, unknown> = {
  capabilities: {
    description:
      'Optional MyOS Admin capability contracts to attach (participantsOrchestration, sessionInteraction, workerAgency)',
    keyType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
    valueType: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  channelBindings: {
    description: 'Maps channel names to participant identifiers',
    keyType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
    valueType: {
      blueId: '4FAZ94JPExNM4pn2ZhtdHa4CVP7uASmLNVrBy7aCG1p5',
    },
  },
  description:
    'Parent worker requests from MyOS Admin to start a new child session. Parent worker requires to have Worker Agency Permission Grant.',
  document: {
    description: 'Target Blue document to be bootstrapped',
  },
  initialMessages: {
    defaultMessage: {
      description: 'Default invitation message sent to all participants',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    description:
      'Messages sent to participants when inviting them to the bootstrapped document',
    perChannel: {
      description: 'Per-channel custom invitation messages',
      keyType: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
      type: {
        blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
      },
      valueType: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
  },
  name: 'Start Worker Session Requested',
  onBehalfOf: {
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '67WiBLmgNLGfxz7EcReXicgopEBUqYcX6mFGe6YRXatw',
  },
};

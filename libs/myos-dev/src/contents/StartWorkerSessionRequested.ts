export const startWorkerSessionRequested = {
  capabilities: {
    description:
      'Optional MyOS Admin capability contracts to attach (participantsOrchestration, sessionInteraction, workerAgency)',
    keyType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    type: {
      blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
    },
    valueType: {
      blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
    },
  },
  channelBindings: {
    description: 'Maps channel names to participant identifiers',
    keyType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    type: {
      blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
    },
    valueType: {
      blueId: '23ZWQ6WWqFcyuoBDV9P8XaLk2oEwJtoQaPrkFFayZVqY',
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
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
    description:
      'Messages sent to participants when inviting them to the bootstrapped document',
    perChannel: {
      description: 'Per-channel custom invitation messages',
      keyType: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
      type: {
        blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
      },
      valueType: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
  },
  name: 'Start Worker Session Requested',
  onBehalfOf: {
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
} as const;

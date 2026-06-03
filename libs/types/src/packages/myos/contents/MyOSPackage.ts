export const MyOSPackage: Record<string, unknown> = {
  agentStoreDescription: {
    description: 'Human-readable description for stores/directories',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  automationTemplate: {
    description: 'Optional automation template to start post-creation',
    type: {
      blueId: '8eyv5ogjHbTqUeaJKWHMenLs3MaCnpGSQkbPrCqvk2Ga',
    },
  },
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
    'A distributable blueprint for a new Agent session, which can include pre-configured automations that start on installation.\n',
  document: {
    description:
      "The full initial state of the Agent to be created. Root type MUST specialize 'Agent'.",
  },
  initialMessages: {
    defaultMessage: {
      description: 'Default invitation message sent to all participants',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    description:
      "Optional per-participant invitation messages (installer's message is public)",
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
  installerChannel: {
    description:
      "Channel name in 'document' to bind to the installing user/account",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'MyOS Package',
  type: {
    blueId: '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc',
  },
};

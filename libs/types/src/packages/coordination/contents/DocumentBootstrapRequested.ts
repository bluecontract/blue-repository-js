export const DocumentBootstrapRequested: Record<string, unknown> = {
  bootstrapAssignee: {
    description:
      'Actor, account, or service responsible for completing the bootstrap.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  channelBindings: {
    description:
      'Mapping from channel names to binding descriptors used to connect the new document to timelines or other event sources.\n',
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
    'Event requesting creation or initialization of a Blue document or document-processing session. Bootstrap requests are\nused when a participant, service, or parent document wants another component to instantiate a document, bind initial\nchannels, seed initial messages, or assign responsibility for the new document.\n\nThe request may carry the document to bootstrap, channel binding information, initial messages, an assignee, and an\nactor on whose behalf the bootstrap is requested. The bootstrap processor should validate the document under Blue\nLanguage and Blue Contracts rules before returning a completion response.\n',
  document: {
    description:
      'Document content, template, reference, or descriptor to bootstrap. The concrete bootstrap runtime defines the accepted shape.\n',
  },
  initialMessages: {
    defaultMessage: {
      description: 'Default invitation message sent to all participants.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    description:
      'Optional initial messages to place on channels or timelines during bootstrap. Shape is runtime-specific.\n',
    perChannel: {
      description: 'Per-channel custom invitation messages.',
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
  name: 'Document Bootstrap Requested',
  onBehalfOf: {
    description:
      'Actor or principal for whom the bootstrap is being requested.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '67WiBLmgNLGfxz7EcReXicgopEBUqYcX6mFGe6YRXatw',
  },
};

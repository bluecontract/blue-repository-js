export const DocumentBootstrapRequested: Record<string, unknown> = {
  description:
    'Request asking the participant addressed by recipientChannel to bootstrap the supplied initial document with any participant resolution input and optional initial Messages. The emitting document decides how and when to create the request.\n',
  document: {
    description: 'Initial document requested for bootstrap.',
    schema: {
      required: true,
    },
  },
  initialMessages: {
    description:
      'Optional Messages supplied as bootstrap input for the target document.',
    itemType: {
      blueId: '768MxgQEHnLSkedHWHtjj43mAjH361Zf6pKZgVxi5po3',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'Document Bootstrap Requested',
  participantMappings: {
    description:
      'Optional participant resolution input for target channels whose actors are not already defined by the target document.\n',
    itemType: {
      blueId: '2bpoRUwLybnKnNhCfmE28HEfh4JMTPBdCRr93G31goFW',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  requesterChannel: {
    description:
      'Optional channel key in the requesting document whose participant is asking for bootstrap.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '6XYXgjV6ja1oLqLCs3TWy4RP5UwmpPZKcppBfwwXcckU',
  },
};

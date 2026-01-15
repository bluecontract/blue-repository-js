export const PayNoteRejectedByClient = {
  description: 'The client rejected the PayNote.',
  name: 'PayNote Rejected By Client',
  reason: {
    description: 'Optional rejection reason.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  rejectedAt: {
    description: 'Timestamp when the client rejected.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  type: {
    blueId: '5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we',
  },
} as const;

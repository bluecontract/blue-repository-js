export const PaymentInitiationRequested = {
  amount: {
    description: 'Payment amount in minor units.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  context: {
    description: 'Optional business-context reference.',
    documentId: {
      description:
        'Blue document id identifying the business document this payment is for.',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
  },
  currency: {
    description: 'ISO 4217 currency code.',
    type: {
      blueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
    },
  },
  description:
    'Request emitted from a payment source document when a payment initiation is requested.',
  idempotencyKey: {
    description:
      'Caller-supplied key identifying one logical initiation attempt.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Payment Initiation Requested',
  paynote: {
    channelBindings: {
      description:
        'Optional channel bindings keyed by the channel names declared in the PayNote document.\n',
      keyType: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
      type: {
        blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
      },
      valueType: {
        blueId: 'DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr',
      },
    },
    description:
      'Optional PayNote bootstrap input.\nIf omitted, MyOS creates the default PayNote during initiation.\n',
    document: {
      description: 'The PayNote document content to bootstrap.',
    },
  },
  recipient: {
    description:
      'Prepared recipient reference. At minimum it must carry the opaque token.',
    type: {
      blueId: '3WA2ppJtUKib2upsEARBgCNJuHXSqHJjm38uLtZf6dNb',
    },
  },
  type: {
    blueId: '8f9UhHMbRe62sFgzQVheToaJPYi7t7HPNVvpQTbqfL5n',
  },
} as const;

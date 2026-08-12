export const PaymentInitiationRequested: Record<string, unknown> = {
  amount: {
    description: 'Payment amount in minor units.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  context: {
    description: 'Optional business-context reference.',
    documentId: {
      description:
        'Blue document id identifying the business document this payment is for.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
  },
  currency: {
    description: 'ISO 4217 currency code.',
    type: {
      blueId: 'rdiMJ9tNu3geCKLDwXxCCjVQzKvCyaFXHiZTFAkRsCJ',
    },
  },
  description:
    'Request emitted from a payment source document when a payment initiation is requested.',
  idempotencyKey: {
    description:
      'Caller-supplied key identifying one logical initiation attempt.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Payment Initiation Requested',
  paynote: {
    channelBindings: {
      description:
        'Optional channel bindings keyed by the channel names declared in the PayNote document.\n',
      keyType: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
      type: {
        blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
      },
      valueType: {
        blueId: 'CaFMD5Tpz4LbGjJsftT3465hKBWa7Ti6dutYHnCSRQyR',
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
      blueId: '9aVaJJvfRrGjLZ55HbKbrd4AUgA9RmjEUCxtfCtqodM9',
    },
  },
  type: {
    blueId: '6XYXgjV6ja1oLqLCs3TWy4RP5UwmpPZKcppBfwwXcckU',
  },
};

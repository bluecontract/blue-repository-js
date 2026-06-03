export const PaymentTargetPreparationRequested: Record<string, unknown> = {
  allowedPayer: {
    description: 'Optional payer identity restriction.',
    type: {
      blueId: 'Cw952SXno2SWR9HL8EwUxWGeioRjxHjCd7G7uFAwC9kN',
    },
  },
  amount: {
    description: 'Optional expected payment amount in minor units.',
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
    description: 'Optional expected ISO 4217 currency code.',
    type: {
      blueId: 'rdiMJ9tNu3geCKLDwXxCCjVQzKvCyaFXHiZTFAkRsCJ',
    },
  },
  description:
    'Request emitted from a MyOS Balance Account document when its owner asks MyOS Admin to prepare an opaque recipient payment target.',
  expectedPaynote: {
    description:
      'Optional matcher over the PayNote bootstrap input that will be accepted for this target.',
  },
  expiresAt: {
    description: 'Optional ISO-8601 expiry timestamp for the prepared target.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Payment Target Preparation Requested',
  type: {
    blueId: '67WiBLmgNLGfxz7EcReXicgopEBUqYcX6mFGe6YRXatw',
  },
};

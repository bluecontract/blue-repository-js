export const PaymentTargetPrepared: Record<string, unknown> = {
  allowedPayer: {
    description:
      'Optional effective payer restriction echoed back to the caller.',
    type: {
      blueId: 'Cw952SXno2SWR9HL8EwUxWGeioRjxHjCd7G7uFAwC9kN',
    },
  },
  amount: {
    description:
      'Optional effective amount constraint echoed back to the caller.',
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
    description:
      'Optional effective currency constraint echoed back to the caller.',
    type: {
      blueId: 'rdiMJ9tNu3geCKLDwXxCCjVQzKvCyaFXHiZTFAkRsCJ',
    },
  },
  description:
    'Result emitted after MyOS Admin successfully prepares an opaque recipient payment target.',
  expectedPaynote: {
    description:
      'Optional effective PayNote matcher echoed back to the caller.',
  },
  expiresAt: {
    description: 'Optional expiry echoed back to the caller.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Payment Target Prepared',
  recipient: {
    description: 'Prepared recipient reference.',
    token: {
      description: 'Opaque prepared recipient token.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    type: {
      blueId: '9aVaJJvfRrGjLZ55HbKbrd4AUgA9RmjEUCxtfCtqodM9',
    },
  },
  type: {
    blueId: '4rExHc9dQ4h6gqTj343qg2teiFr8GDwWv1aDYPdV21QH',
  },
};

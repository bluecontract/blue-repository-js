export const LinkedCardChargeAndCaptureImmediatelyRequested: Record<
  string,
  unknown
> = {
  amount: {
    description: 'Charge amount in minor currency units.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  description:
    'Request to create a linked card charge and capture it immediately.',
  name: 'Linked Card Charge and Capture Immediately Requested',
  paymentMandateDocumentId: {
    description:
      'Optional Payment Mandate document id used to authorize charge execution.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  paynote: {
    description:
      'Optional PayNote document to bootstrap for the created charge context.',
  },
  type: {
    blueId: '67WiBLmgNLGfxz7EcReXicgopEBUqYcX6mFGe6YRXatw',
  },
};

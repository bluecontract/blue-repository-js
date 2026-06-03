export const ReverseCardChargeRequested: Record<string, unknown> = {
  amount: {
    description: 'Charge amount in minor currency units.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  description:
    'Request to create a reverse-direction card charge (merchant to card owner) in root context.',
  name: 'Reverse Card Charge Requested',
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

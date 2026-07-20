export const ReverseCardChargeAndCaptureImmediatelyRequested: Record<
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
    'Request to create a reverse-direction card charge and capture it immediately.',
  name: 'Reverse Card Charge and Capture Immediately Requested',
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
    blueId: '6XYXgjV6ja1oLqLCs3TWy4RP5UwmpPZKcppBfwwXcckU',
  },
};

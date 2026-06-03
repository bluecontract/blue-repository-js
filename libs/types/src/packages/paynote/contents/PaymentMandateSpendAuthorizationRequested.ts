export const PaymentMandateSpendAuthorizationRequested: Record<
  string,
  unknown
> = {
  amountMinor: {
    description: 'Requested amount in minor currency units.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  authorizationId: {
    description:
      'Correlation and idempotency key for a single authorization lifecycle.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  counterpartyId: {
    description:
      'Counterparty identifier interpreted according to counterpartyType.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  counterpartyType: {
    description:
      'Counterparty identifier type ("merchantId" | "customerId" | "accountNumber").',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  currency: {
    description:
      'Currency used to validate amountMinor against mandate limits.',
    type: {
      blueId: 'rdiMJ9tNu3geCKLDwXxCCjVQzKvCyaFXHiZTFAkRsCJ',
    },
  },
  description:
    'Bank asks a Payment Mandate document to authorize a single spend before reserve/capture execution.\n',
  name: 'Payment Mandate Spend Authorization Requested',
  requestedAt: {
    description: 'Timestamp when the authorization request was created.',
    type: {
      blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
    },
  },
  requestingDocumentId: {
    description: 'Document id that requested the charge.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  requestingSessionId: {
    description: 'Session id that requested the charge.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '67WiBLmgNLGfxz7EcReXicgopEBUqYcX6mFGe6YRXatw',
  },
};

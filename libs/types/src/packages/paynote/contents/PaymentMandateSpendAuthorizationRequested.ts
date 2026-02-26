export const PaymentMandateSpendAuthorizationRequested = {
  amountMinor: {
    description: 'Requested amount in minor currency units.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  chargeAttemptId: {
    description:
      'Correlation and idempotency key for a single charge attempt. Must be stable across retries of the same attempt.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  chargeMode: {
    description:
      'Requested charge execution mode ("authorize_only" | "authorize_and_capture").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  counterpartyId: {
    description:
      'Counterparty identifier interpreted according to counterpartyType.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  counterpartyType: {
    description:
      'Counterparty identifier type ("merchantId" | "customerId" | "accountNumber").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  currency: {
    description:
      'Currency used to validate amountMinor against mandate limits.',
    type: {
      blueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
    },
  },
  description:
    'Bank asks a Payment Mandate document to authorize a single charge attempt before reserve/capture execution.\n',
  name: 'Payment Mandate Spend Authorization Requested',
  requestedAt: {
    description: 'Timestamp when the authorization request was created.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  requestingDocumentId: {
    description: 'Document id that requested the charge.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  requestingSessionId: {
    description: 'Session id that requested the charge.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '8f9UhHMbRe62sFgzQVheToaJPYi7t7HPNVvpQTbqfL5n',
  },
} as const;

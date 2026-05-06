export const PaymentInitiated = {
  description:
    'Result emitted after MyOS initiated the payment and attached paynote.',
  name: 'Payment Initiated',
  paynoteDocumentId: {
    description: 'Blue document id of the initiated PayNote.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  paynotePayeeSessionId: {
    description: 'MyOS payee session id for the initiated PayNote.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;

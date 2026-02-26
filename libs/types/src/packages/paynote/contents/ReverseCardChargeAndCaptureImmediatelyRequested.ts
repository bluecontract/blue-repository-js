export const ReverseCardChargeAndCaptureImmediatelyRequested = {
  amount: {
    description: 'Charge amount in minor currency units.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  description:
    'Request to create a reverse-direction card charge and capture it immediately.',
  name: 'Reverse Card Charge and Capture Immediately Requested',
  paymentMandateDocumentId: {
    description:
      'Optional Payment Mandate document id used to authorize charge execution.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  paynote: {
    description:
      'Optional PayNote document to bootstrap for the created charge context.',
  },
  type: {
    blueId: '8f9UhHMbRe62sFgzQVheToaJPYi7t7HPNVvpQTbqfL5n',
  },
} as const;

export const PaymentInitiated: Record<string, unknown> = {
  description:
    'Result emitted after MyOS initiated the payment and attached paynote.',
  name: 'Payment Initiated',
  paynoteDocumentId: {
    description: 'Blue document id of the initiated PayNote.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  paynotePayeeSessionId: {
    description: 'MyOS payee session id for the initiated PayNote.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: 'AQqdPmtKmB5VNH4rEbeKcRxsVStTTbJhS4fVF8wiTZrk',
  },
};

export const CardChargeResponded: Record<string, unknown> = {
  description: 'Decision response for a card charge request.',
  name: 'Card Charge Responded',
  paymentMandateDocumentId: {
    description:
      'Payment Mandate document id used for this charge decision when available.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  reason: {
    description: 'Optional explanation for rejected or pending decisions.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  status: {
    description:
      'Request decision status ("accepted" | "rejected" | "pending").',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: 'AQqdPmtKmB5VNH4rEbeKcRxsVStTTbJhS4fVF8wiTZrk',
  },
};

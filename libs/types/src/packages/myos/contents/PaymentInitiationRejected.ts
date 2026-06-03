export const PaymentInitiationRejected: Record<string, unknown> = {
  code: {
    description:
      'Stable machine-readable rejection reason, for example:\ninvalid_request,\ntoken_not_found,\ntoken_expired,\ntoken_consumed,\npayer_not_allowed,\ncontext_mismatch,\namount_mismatch,\ncurrency_mismatch,\npaynote_mismatch,\ninsufficient_funds,\nidempotency_conflict.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Result emitted when MyOS Admin rejects a payment initiation request before or instead of starting the payment.',
  name: 'Payment Initiation Rejected',
  reason: {
    description: 'Human-readable explanation of rejection.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: 'AQqdPmtKmB5VNH4rEbeKcRxsVStTTbJhS4fVF8wiTZrk',
  },
};

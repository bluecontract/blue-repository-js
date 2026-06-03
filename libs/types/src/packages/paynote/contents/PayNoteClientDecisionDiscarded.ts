export const PayNoteClientDecisionDiscarded: Record<string, unknown> = {
  decision: {
    description: 'Attempted decision (accepted or rejected).',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  decisionAt: {
    description: 'Timestamp provided with the decision, if any.',
    type: {
      blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
    },
  },
  description:
    "The client's decision was discarded because it could not be applied in the current delivery state.",
  name: 'PayNote Client Decision Discarded',
  reason: {
    description: 'Validation reason for discarding the decision.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: 'ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5',
  },
};

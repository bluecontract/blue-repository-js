export const CdmEventWorkflowCreditLimitUtilisationPosition = {
  global: {
    description:
      'Global credit limit utilisation amount, agnostic of long/short position direction.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  longPosition: {
    description: 'Credit limit utilisation attributable to long positions.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  name: 'cdm/event/workflow/CreditLimitUtilisationPosition',
  shortPosition: {
    description: 'Credit limit utilisation attributable to short positions.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;

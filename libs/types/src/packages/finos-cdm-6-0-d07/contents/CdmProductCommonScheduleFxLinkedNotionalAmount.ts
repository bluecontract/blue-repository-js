export const CdmProductCommonScheduleFxLinkedNotionalAmount = {
  adjustedFxSpotFixingDate: {
    description:
      'The date on which the FX spot rate is observed. This date should already be adjusted for any applicable business day convention.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'A data to:  describe the cashflow representation for FX linked notionals.\n',
  name: 'cdm/product/common/schedule/FxLinkedNotionalAmount',
  notionalAmount: {
    description: 'The calculation period notional amount.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  observedFxSpotRate: {
    description: 'The actual observed FX spot rate.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  resetDate: {
    description: 'The reset date.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;

export const CdmProductTemplateAsian = {
  averagingInOut: {
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7TNdG2Z7nw9MPJJnRN9AWntYxxBDXatd9BRy86A9zjep',
    },
  },
  averagingPeriodIn: {
    description: 'The averaging in period.',
    type: {
      blueId: '9hxbzdeXPKQQGVKqPfSXbF69HWKHGiPzMLHRa4vh62dM',
    },
  },
  averagingPeriodOut: {
    description: 'The averaging out period.',
    type: {
      blueId: '9hxbzdeXPKQQGVKqPfSXbF69HWKHGiPzMLHRa4vh62dM',
    },
  },
  description: 'As per ISDA 2002 Definitions.',
  name: 'cdm/product/template/Asian',
  strikeFactor: {
    description: 'The factor of strike.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;

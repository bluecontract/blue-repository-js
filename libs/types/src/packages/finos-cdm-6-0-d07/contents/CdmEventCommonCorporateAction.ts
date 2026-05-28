export const CdmEventCommonCorporateAction = {
  corporateActionType: {
    description: 'The type of corporate action taking place.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '2BvXwm2PJoPCvRz7g8DFbxuMwvaXy1mHq7Tnw2QmQAn6',
    },
  },
  description: 'Specifies the relevant data regarding a corporate action.',
  exDate: {
    description:
      'The date on which the corporate action is known to have taken place.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'cdm/event/common/CorporateAction',
  payDate: {
    description:
      'The date on which resulting from the corporate action are delivered.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  underlier: {
    description: 'The underlier impacted by the corporate action.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#5',
    },
  },
} as const;

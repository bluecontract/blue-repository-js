export const CdmProductTemplatePassThroughItem = {
  description: 'Class to represent a single pass through payment.',
  name: 'cdm/product/template/PassThroughItem',
  passThroughPercentage: {
    description:
      'Percentage of payments from the underlier which are passed through.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  payerReceiver: {
    description:
      "This attribute doesn't exists in the FpML construct, which makes use of the PayerReceiver.model group.",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'Cx2eHN58eqWKXnZwn6JDYBzAfG95QSEAWjQhbX1R5An3',
    },
  },
} as const;

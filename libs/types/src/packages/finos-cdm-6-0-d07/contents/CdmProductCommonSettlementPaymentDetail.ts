export const CdmProductCommonSettlementPaymentDetail = {
  name: 'cdm/product/common/settlement/PaymentDetail',
  paymentAmount: {
    description: 'A fixed payment amount.',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  paymentDate: {
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
  paymentRule: {
    description: 'The calculation rule.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'N9dqrkkDsXewQqjzkzMPPFBSGpAGbdj5Nya3g9ZDPtp',
    },
  },
} as const;

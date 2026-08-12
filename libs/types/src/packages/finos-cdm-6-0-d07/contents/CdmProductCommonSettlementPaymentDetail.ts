export const CdmProductCommonSettlementPaymentDetail: Record<string, unknown> =
  {
    name: 'cdm/product/common/settlement/PaymentDetail',
    paymentAmount: {
      description: 'A fixed payment amount.',
      type: {
        blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
      },
    },
    paymentDate: {
      type: {
        blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
      },
    },
    paymentRule: {
      description: 'The calculation rule.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'tgFBHmNbSSZ6ELyyAHYu8kZnc13EpuENqMFM5qRR7ti',
      },
    },
  };

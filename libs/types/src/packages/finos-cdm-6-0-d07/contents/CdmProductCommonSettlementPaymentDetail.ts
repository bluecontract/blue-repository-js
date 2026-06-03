export const CdmProductCommonSettlementPaymentDetail: Record<string, unknown> =
  {
    name: 'cdm/product/common/settlement/PaymentDetail',
    paymentAmount: {
      description: 'A fixed payment amount.',
      type: {
        blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
      },
    },
    paymentDate: {
      type: {
        blueId: '2Dr79mc7tDo84pCgLDhmSAuay1naC42UUovCTcaMjY5R',
      },
    },
    paymentRule: {
      description: 'The calculation rule.',
      schema: {
        required: true,
      },
      type: {
        blueId: '3YeAtbFamK5F5iKzyL3iNd6gFidd9BmNNPL6HqrJVqgu',
      },
    },
  };

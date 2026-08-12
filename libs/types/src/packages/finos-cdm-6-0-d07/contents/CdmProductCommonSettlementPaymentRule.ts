export const CdmProductCommonSettlementPaymentRule: Record<string, unknown> = {
  description:
    'A class defining the payment calculation rule. As of FpML 5.10, percentage rule is the only calculation rule that has been specified as part of the standard.\n',
  name: 'cdm/product/common/settlement/PaymentRule',
  percentageRule: {
    description:
      'This attribute is not present as part of the FpML construct, as the payment rule is specialised by means of runtime type extension through the xsi:type.\n',
    type: {
      blueId: 'mbg9RAjY9BfmAiTUiScZ7m8HbTNjePvoDuhN9R2AbhR',
    },
  },
};

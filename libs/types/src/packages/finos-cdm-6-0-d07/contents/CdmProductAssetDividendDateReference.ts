export const CdmProductAssetDividendDateReference: Record<string, unknown> = {
  dateReference: {
    description:
      'Specification of the dividend date using an enumeration, with values such as the pay date, the ex-date or the record date.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Bh6NCuJAY3pXVNvSM2B31NzdPp9zCisTdM2dbrauJJw8',
    },
  },
  description:
    "A class to specify the dividend date by reference to another date, with the ability to apply and offset. This class doesn't exist in FpML and is meant to simplify the choice constraint associated with the DividendPaymentDate class.\n",
  name: 'cdm/product/asset/DividendDateReference',
  paymentDateOffset: {
    description:
      'Only to be used when SharePayment has been specified in the dividendDateReference element. The number of Currency Business Days following the day on which the Issuer of the Shares pays the relevant dividend to holders of record of the Shares.\n',
    type: {
      blueId: 'GcgyRFiq68rKDTw1wtJsfsUpu4hBukUsv29vavmPQmrZ',
    },
  },
};

export const CdmProductAssetDividendDateReference = {
  dateReference: {
    description:
      'Specification of the dividend date using an enumeration, with values such as the pay date, the ex-date or the record date.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'BUpou4kA4YDHYorRt8HySKCususevQATeSj9bysNS8AK',
    },
  },
  description:
    "A class to specify the dividend date by reference to another date, with the ability to apply and offset. This class doesn't exist in FpML and is meant to simplify the choice constraint associated with the DividendPaymentDate class.\n",
  name: 'cdm/product/asset/DividendDateReference',
  paymentDateOffset: {
    description:
      'Only to be used when SharePayment has been specified in the dividendDateReference element. The number of Currency Business Days following the day on which the Issuer of the Shares pays the relevant dividend to holders of record of the Shares.\n',
    type: {
      blueId: '5pnk9bH1JJq67GAcpXYjFhhREvjUoveKHs98CBqt9pEq',
    },
  },
} as const;

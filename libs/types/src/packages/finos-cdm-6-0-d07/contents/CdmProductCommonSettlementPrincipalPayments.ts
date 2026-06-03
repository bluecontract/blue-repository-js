export const CdmProductCommonSettlementPrincipalPayments: Record<
  string,
  unknown
> = {
  description:
    'A class defining which principal exchanges occur for the stream.',
  finalPayment: {
    description:
      'A true/false flag to indicate whether there is a final exchange of principal on the termination date.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  initialPayment: {
    description:
      'A true/false flag to indicate whether there is an initial exchange of principal on the effective date.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  intermediatePayment: {
    description:
      'A true/false flag to indicate whether there are intermediate or interim exchanges of principal during the term of the swap.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/product/common/settlement/PrincipalPayments',
  principalPaymentSchedule: {
    description:
      'Describe dates schedules for Principal Exchanges and related role of the parties when known.',
    type: {
      blueId: 'Esmmz6HUDCJAgn44LSSCvC1CCKuZW9U22nKNF4fXwkjv',
    },
  },
  varyingLegNotionalCurrency: {
    description:
      'Indicate the Payout legs which nominal amount may vary in regards of FX Fixing dates as determined in the product terms.\n',
    itemType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};

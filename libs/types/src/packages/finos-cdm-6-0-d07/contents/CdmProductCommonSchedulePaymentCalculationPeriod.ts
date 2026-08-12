export const CdmProductCommonSchedulePaymentCalculationPeriod: Record<
  string,
  unknown
> = {
  adjustedPaymentDate: {
    description:
      'The adjusted payment date. This date should already be adjusted for any applicable business day convention. This component is not intended for use in trade confirmation but may be specified to allow the fee structure to also serve as a cashflow type component.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  calculationPeriod: {
    description:
      'The parameters used in the calculation of a fixed or floating rate calculation period amount. A list of calculation period elements may be ordered in the document by ascending start date. An FpML document which contains an unordered list of calculation periods is still regarded as a conformant document.\n',
    itemType: {
      blueId: '5iALuSYExmWtctSi7Hq5NapM77ZtzZ5nmkxPC22Cz4ZM',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'A data defining:  the adjusted payment date and associated calculation period parameters required to calculate the actual or projected payment amount. This data forms:  part of the cashflow representation of a swap stream.\n',
  discountFactor: {
    description:
      'A decimal value representing the discount factor used to calculate the present value of cash flow.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  fixedPaymentAmount: {
    description: 'A known fixed payment amount.',
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  forecastPaymentAmount: {
    description:
      'A monetary amount representing the forecast of the future value of the payment.',
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  name: 'cdm/product/common/schedule/PaymentCalculationPeriod',
  presentValueAmount: {
    description:
      'A monetary amount representing the present value of the forecast payment.',
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  unadjustedPaymentDate: {
    description: 'The unadjusted payment date.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};

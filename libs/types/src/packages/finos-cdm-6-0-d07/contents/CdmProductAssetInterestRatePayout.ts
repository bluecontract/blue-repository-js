export const CdmProductAssetInterestRatePayout: Record<string, unknown> = {
  bondReference: {
    description:
      'Reference to a bond underlier to represent an asset swap or Condition Precedent Bond.',
    type: {
      blueId: '5UTtrYJXRQ91C3zHV1ASggKdKMGxrvDbyUoqY7HwknPB',
    },
  },
  calculationPeriodDates: {
    description:
      'The parameters used to generate the calculation period dates schedule, including the specification of any initial or final stub calculation periods.\n',
    type: {
      blueId: '7dK86pbyNfhuuigQR5bQueaqH68Sqze66Qwad2m64rxg',
    },
  },
  cashflowRepresentation: {
    description: 'The cashflow representation of the swap stream.',
    type: {
      blueId: 'DTtWhJnXuoKubPMxQyji2Nw7Ci2mGd6RoJWN5EbzReoR',
    },
  },
  compoundingMethod: {
    description:
      'If one or more calculation period contributes to a single payment amount this element specifies whether compounding is applicable and, if so, what compounding method is to be used. This element must only be included when more than one calculation period contributes to a single payment amount.\n',
    type: {
      blueId: 'HzNNten2ctS1XjUDRet8Qr7Nq3sh6vfsJBS3d1gH1JVH',
    },
  },
  dayCountFraction: {
    description:
      'The day count fraction. The cardinality has been relaxed when compared with the FpML interest rate swap for the purpose of accommodating standardized credit default swaps which DCF is not explicitly stated as part of the economic terms. The data rule InterestRatePayout_dayCountFraction requires that the DCF be stated for interest rate products.\n',
    type: {
      blueId: '587iDHMkRt71kZVCzE5o3zXzWprHzypcRd91TYbQnSpE',
    },
  },
  description:
    'A class to specify all of the terms necessary to define and calculate a cash flow based on a fixed, a floating or an inflation index rate. The interest rate payout can be applied to interest rate swaps and FRA (which both have two associated interest rate payouts), credit default swaps (to represent the fee leg when subject to periodic payments) and equity swaps (to represent the funding leg). The associated globalKey denotes the ability to associate a hash value to the InterestRatePayout instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.\n',
  discountingMethod: {
    description:
      'The parameters specifying any discounting conventions that may apply. This element must only be included if discounting applies.\n',
    type: {
      blueId: 'Cr2qn4kdXt3AhEMg3m3yXpBXDDPzHwdy72ZZKWK8a1y7',
    },
  },
  fixedAmount: {
    description: 'Fixed Amount Calculation',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  floatingAmount: {
    description: 'Floating Amount Calculation',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/product/asset/InterestRatePayout',
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
    type: {
      blueId: '3xPof2WJyFXisFtvaxpSGddTxHyGioazbsMJjuUucbzT',
    },
  },
  paymentDate: {
    description:
      'The payment date, where only one date is specified, as for the FRA product.',
    type: {
      blueId: 'GKy9ctegTJLwNAwxTMo1WX9xQCvWbzwntin4VStfEfDi',
    },
  },
  paymentDates: {
    description:
      'The payment date schedule, as defined by the parameters that are needed to specify it, either in a parametric way or by reference to another schedule of dates (e.g. the reset dates).\n',
    type: {
      blueId: '23fb9HBYcZQ8enTm83iVQjixyTrHqNc5G1ANtAbB1ixz',
    },
  },
  paymentDelay: {
    description:
      'Applicable to CDS on MBS to specify whether payment delays are applicable to the fixed Amount. RMBS typically have a payment delay of 5 days between the coupon date of the reference obligation and the payment date of the synthetic swap. CMBS do not, on the other hand, with both payment dates being on the 25th of each month.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  priceQuantity: {
    description:
      "Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).\n",
    type: {
      blueId: '7nSxNdghnPkGBbyqzqUELC5UcBMNfLdrCr4oXbav2d3J',
    },
  },
  principalPayment: {
    description:
      'The specification of the principal exchange. Optional as only applicable in the case of cross-currency or zero-coupon swaps with a final payment.\n',
    type: {
      blueId: '8VsQE5PSzyWWApw5Ykfum97vLPNoa36BemLUMHimzMb5',
    },
  },
  rateSpecification: {
    description:
      'The specification of the rate value(s) applicable to the contract using either a floating rate calculation, a single fixed rate, a fixed rate schedule, or an inflation rate calculation.\n',
    type: {
      blueId: '6sGfKpzEcNGWsWw9v54bkUTJDbBHqbhEeJFCsf6tUhXf',
    },
  },
  resetDates: {
    description:
      'The reset dates schedule, i.e. the dates on which the new observed index value is applied for each period and the interest rate hence begins to accrue.\n',
    type: {
      blueId: '2smAatQQw7CLfmf1HYvJs7niaBG5fYmRvaYQFZzbxFyF',
    },
  },
  settlementTerms: {
    description:
      'Each payout leg must specifies its settlement terms, including the delivery type (i.e. cash vs physical, and their respective terms), the transfer type (DvP etc.) and settlement date, if any.\n',
    type: {
      blueId: '2qfdfn8VYJmiXxmTj9Vwfu1pB3jFJQK9WAShnf8n1r1m',
    },
  },
  spreadCalculationMethod: {
    description:
      "Method by which spread is calculated. For example on an asset swap: 'ParPar' or 'Proceeds' may be the method indicated.\n",
    type: {
      blueId: '5PZmtNnUvmoYu5wdHEd1a3Ng2sZcZ76qmfmNG6hoFS61',
    },
  },
  stubPeriod: {
    description:
      'The stub calculation period amount parameters. This element must only be included if there is an initial or final stub calculation period. Even then, it must only be included if either the stub references a different floating rate tenor to the regular calculation periods, or if the stub is calculated as a linear interpolation of two different floating rate tenors, or if a specific stub rate or stub amount has been negotiated.\n',
    type: {
      blueId: 'GDsReUUBoQqUk4nzm4MUFgBzwihcp99Xt2hYSukxTdPp',
    },
  },
};

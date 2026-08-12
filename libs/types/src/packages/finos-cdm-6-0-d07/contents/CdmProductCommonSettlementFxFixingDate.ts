export const CdmProductCommonSettlementFxFixingDate: Record<string, unknown> = {
  businessCenters: {
    type: {
      blueId: 'Ds5a9bChKossVgHEM7Z2TQTCxDXdB2SZhtM9v9Y3mYmM',
    },
  },
  businessCentersReference: {
    description:
      'A reference to a set of financial business centers defined elsewhere in the document. This set of business centers is used to determine whether a particular day is a business day or not.\n',
    type: {
      blueId: '7ACnecbuWHtBLYhrw8BaioS3DSUQFiDskjpaDNspEmof',
    },
  },
  businessDayConvention: {
    description:
      'The convention for adjusting a date if it would otherwise fall on a day that is not a business day, as specified by an ISDA convention (e.g. Following, Precedent).\n',
    type: {
      blueId: '4nDV142exufoEvXv8wAPT7GVTpvQw7t3yETBpT9G6aWX',
    },
  },
  dateRelativeToCalculationPeriodDates: {
    description:
      'The calculation period references on which settlements in non-deliverable currency are due and will then have to be converted according to the terms specified through the other parts of the nonDeliverableSettlement structure. Implemented for Brazilian-CDI swaps where it will refer to the termination date of the appropriate leg.\n',
    type: {
      blueId: 'ytstqNPphmXWb5ZTFeFxrGKxyp3SXuEhDFAEsbb8iLA',
    },
  },
  dateRelativeToPaymentDates: {
    description:
      'The payment date references on which settlements in non-deliverable currency are due and will then have to be converted according to the terms specified through the other parts of the nonDeliverableSettlement structure.\n',
    type: {
      blueId: 'DW32pDb5aR7QPQPk2s5ybQJuzPvqzb6S2WMHyY7WLBP7',
    },
  },
  dateRelativeToValuationDates: {
    description:
      'The calculation period references on which settlements in non-deliverable currency are due and will then have to be converted according to the terms specified through the other parts of the nonDeliverableSettlement structure. Implemented for Brazilian-CDI swaps where it will refer to the termination date of the appropriate leg.\n',
    type: {
      blueId: 'HjRBL4m9mTkjZ84WwVn8hiQbhY7uJxxQbkJKf1V7Fqtj',
    },
  },
  dayType: {
    description:
      'In the case of an offset specified as a number of days, this element defines whether consideration is given as to whether a day is a good business day or not. If a day type of business days is specified then non-business days are ignored when calculating the offset. The financial business centers to use for determination of business days are implied by the context in which this element is used. This element must only be included when the offset is specified as a number of days. If the offset is zero days then the dayType element should not be included.\n',
    type: {
      blueId: '7SsDfFvRbfxrm8vS98NZ5Vq9nqD3CFNGWsLr6dc738LJ',
    },
  },
  description:
    'Extends the Offset structure to specify an FX fixing date as an offset to dates specified somewhere else in the document.\n',
  fxFixingDate: {
    description:
      "Describes the specific date when a non-deliverable forward or cash-settled option will 'fix' against a particular rate, which will be used to compute the ultimate cash settlement. This element should be omitted where a single, discrete fixing date cannot be identified e.g. on an american option, where fixing may occur at any date on a continuous range.  This attribute was formerly part of 'fxSettlementTerms', which is now being harmonised into a common 'CashSettlementTerms' that includes a 'ValuationDate'.\n",
    type: {
      blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
    },
  },
  name: 'cdm/product/common/settlement/FxFixingDate',
  period: {
    description:
      'A time period, e.g. a day, week, month or year of the stream. If the periodMultiplier value is 0 (zero) then period must contain the value D (day).\n',
    type: {
      blueId: 'HfcnjKnwmrE8GwTjvmvtKtcYgCZHWwe9PpsaJ5Y38Y2F',
    },
  },
  periodMultiplier: {
    description:
      'A time period multiplier, e.g. 1, 2 or 3 etc. A negative value can be used when specifying an offset relative to another date, e.g. -2 days.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
};

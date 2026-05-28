export const CdmProductCommonSettlementFxFixingDate = {
  businessCenters: {
    type: {
      blueId: 'AaeaS3nBkqHVJTRb23iTwYjbMyikRz6mRz7L5FdHczSH',
    },
  },
  businessCentersReference: {
    description:
      'A reference to a set of financial business centers defined elsewhere in the document. This set of business centers is used to determine whether a particular day is a business day or not.\n',
    type: {
      blueId: '4rV1yRtzeWP1SgQcDCpH4suo5UMbYFANCbKcwXZWtfQv',
    },
  },
  businessDayConvention: {
    description:
      'The convention for adjusting a date if it would otherwise fall on a day that is not a business day, as specified by an ISDA convention (e.g. Following, Precedent).\n',
    type: {
      blueId: 'EP4PK7ibh1EaWh9sLTjFcwVikiRQECurvR5Nb9ZPbJCs',
    },
  },
  dateRelativeToCalculationPeriodDates: {
    description:
      'The calculation period references on which settlements in non-deliverable currency are due and will then have to be converted according to the terms specified through the other parts of the nonDeliverableSettlement structure. Implemented for Brazilian-CDI swaps where it will refer to the termination date of the appropriate leg.\n',
    type: {
      blueId: '4o5d36vxkXs3Qdn8xQqyihG3a6eaDaNsQ8gKqkZoUWSK',
    },
  },
  dateRelativeToPaymentDates: {
    description:
      'The payment date references on which settlements in non-deliverable currency are due and will then have to be converted according to the terms specified through the other parts of the nonDeliverableSettlement structure.\n',
    type: {
      blueId: 'AeiUZ17pKAByiRrS6p1GH2RgKqQbh5a2F9SJ2rTsr2bE',
    },
  },
  dateRelativeToValuationDates: {
    description:
      'The calculation period references on which settlements in non-deliverable currency are due and will then have to be converted according to the terms specified through the other parts of the nonDeliverableSettlement structure. Implemented for Brazilian-CDI swaps where it will refer to the termination date of the appropriate leg.\n',
    type: {
      blueId: '8anXaV9kfWdcakaHM9sbDkkkXhFwYtAELJDCmQDjZ9wU',
    },
  },
  dayType: {
    description:
      'In the case of an offset specified as a number of days, this element defines whether consideration is given as to whether a day is a good business day or not. If a day type of business days is specified then non-business days are ignored when calculating the offset. The financial business centers to use for determination of business days are implied by the context in which this element is used. This element must only be included when the offset is specified as a number of days. If the offset is zero days then the dayType element should not be included.\n',
    type: {
      blueId: '5TzmGki42MGuPUhmSXFrfufu3WDLpyQMvv91eWXoxniX',
    },
  },
  description:
    'Extends the Offset structure to specify an FX fixing date as an offset to dates specified somewhere else in the document.\n',
  fxFixingDate: {
    description:
      "Describes the specific date when a non-deliverable forward or cash-settled option will 'fix' against a particular rate, which will be used to compute the ultimate cash settlement. This element should be omitted where a single, discrete fixing date cannot be identified e.g. on an american option, where fixing may occur at any date on a continuous range.  This attribute was formerly part of 'fxSettlementTerms', which is now being harmonised into a common 'CashSettlementTerms' that includes a 'ValuationDate'.\n",
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
  name: 'cdm/product/common/settlement/FxFixingDate',
  period: {
    description:
      'A time period, e.g. a day, week, month or year of the stream. If the periodMultiplier value is 0 (zero) then period must contain the value D (day).\n',
    type: {
      blueId: 'AgkY1rP5TjBiYR6gsYzEm1vgFaYxyUc6Lt3pwuRsWx8F',
    },
  },
  periodMultiplier: {
    description:
      'A time period multiplier, e.g. 1, 2 or 3 etc. A negative value can be used when specifying an offset relative to another date, e.g. -2 days.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
} as const;

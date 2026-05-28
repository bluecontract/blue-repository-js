export const CdmBaseDatetimePeriodRange = {
  description:
    'Indicates The period range defined as either a lower and upper period bound, or both.',
  lowerBound: {
    description:
      'Specifies the lower bound of a period range, e.g. greater than or equal to 5Y.',
    type: {
      blueId: 'jdGLLmYcPH1SJmGWnGeTDz2mBFp1xR8wP48NG8gskcH',
    },
  },
  name: 'cdm/base/datetime/PeriodRange',
  upperBound: {
    description:
      'Specifies the upper bound of a period range, e.g. less than to 10Y.',
    type: {
      blueId: 'jdGLLmYcPH1SJmGWnGeTDz2mBFp1xR8wP48NG8gskcH',
    },
  },
} as const;

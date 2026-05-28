export const CdmBaseDatetimeRelativeDates = {
  adjustedDate: {
    description:
      'The date once the adjustment has been performed. (Note that this date may change if the business center holidays change).\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  businessCenters: {
    type: {
      blueId: 'AaeaS3nBkqHVJTRb23iTwYjbMyikRz6mRz7L5FdHczSH',
    },
  },
  businessCentersReference: {
    description:
      'A pointer style reference to a set of financial business centers defined elsewhere in the document. This set of business centers is used to determine whether a particular day is a business day or not.\n',
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
  dateRelativeTo: {
    description:
      'Specifies the anchor as an href attribute. The href attribute value is a pointer style reference to the element or component elsewhere in the document where the anchor date is defined.\n',
    type: {
      blueId: '2NmzfUpHRVGHJtBNJodPdDCxDTwixoJpKAWSpVNE9ema',
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
    'A class describing a set of dates defined as relative to another set of dates.',
  name: 'cdm/base/datetime/RelativeDates',
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
  periodSkip: {
    description:
      'The number of periods in the referenced date schedule that are between each date in the relative date schedule. Thus a skip of 2 would mean that dates are relative to every second date in the referenced schedule. If present this should have a value greater than 1.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  scheduleBounds: {
    description:
      'The first and last dates of a schedule. This can be used to restrict the range of values in a reference series of dates.\n',
    type: {
      blueId: 'HzWZdNo2fx1o4EhUXn1aUnQgTLJm9PASFfSrNzJzLiT8',
    },
  },
} as const;

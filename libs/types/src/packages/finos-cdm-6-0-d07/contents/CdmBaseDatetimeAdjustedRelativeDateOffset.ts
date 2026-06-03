export const CdmBaseDatetimeAdjustedRelativeDateOffset: Record<
  string,
  unknown
> = {
  adjustedDate: {
    description:
      'The date once the adjustment has been performed. (Note that this date may change if the business center holidays change).\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  businessCenters: {
    type: {
      blueId: 'H53mV1d8rMzhefLZH8WzGchozyQA28cbwNpBHGmVA9ti',
    },
  },
  businessCentersReference: {
    description:
      'A pointer style reference to a set of financial business centers defined elsewhere in the document. This set of business centers is used to determine whether a particular day is a business day or not.\n',
    type: {
      blueId: '7ACnecbuWHtBLYhrw8BaioS3DSUQFiDskjpaDNspEmof',
    },
  },
  businessDayConvention: {
    description:
      'The convention for adjusting a date if it would otherwise fall on a day that is not a business day, as specified by an ISDA convention (e.g. Following, Precedent).\n',
    type: {
      blueId: 'UEYhmdmBmLhrdtL1ThGtACP6Ljtvao5EVBeQdbiB2XJ',
    },
  },
  dateRelativeTo: {
    description:
      'Specifies the anchor as an href attribute. The href attribute value is a pointer style reference to the element or component elsewhere in the document where the anchor date is defined.\n',
    type: {
      blueId: '6r7X1t4mk8pzhtyij1QDYaoMrseQxsRdHuJTw8dJaEk2',
    },
  },
  dayType: {
    description:
      'In the case of an offset specified as a number of days, this element defines whether consideration is given as to whether a day is a good business day or not. If a day type of business days is specified then non-business days are ignored when calculating the offset. The financial business centers to use for determination of business days are implied by the context in which this element is used. This element must only be included when the offset is specified as a number of days. If the offset is zero days then the dayType element should not be included.\n',
    type: {
      blueId: 'EPBWZ9jBx984Q99bnqB2NAqBTKrAr4mJWCYnwcFgnivq',
    },
  },
  description:
    'A type defining a date (referred to as the derived date) as a relative offset from another date (referred to as the anchor date) plus optional date adjustments.\n',
  name: 'cdm/base/datetime/AdjustedRelativeDateOffset',
  period: {
    description:
      'A time period, e.g. a day, week, month or year of the stream. If the periodMultiplier value is 0 (zero) then period must contain the value D (day).\n',
    type: {
      blueId: 'DLZBHc2QwPj4my2QeZffRBsJxbqMSJzN3PScqxr9C1Yj',
    },
  },
  periodMultiplier: {
    description:
      'A time period multiplier, e.g. 1, 2 or 3 etc. A negative value can be used when specifying an offset relative to another date, e.g. -2 days.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  relativeDateAdjustments: {
    description:
      'The business day convention and financial business centers used for adjusting the relative date if it would otherwise fall on a day that is not a business date in the specified business centers.\n',
    type: {
      blueId: '8ZhZC2EwhTqHnDvvcr2ZW4iwCBJM57NcLAqPCd8shypq',
    },
  },
};

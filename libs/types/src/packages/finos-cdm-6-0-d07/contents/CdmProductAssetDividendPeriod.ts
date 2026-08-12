export const CdmProductAssetDividendPeriod: Record<string, unknown> = {
  basketConstituent: {
    description:
      'For basket underliers, reference to the basket component which is paying dividends in the specified period.',
    type: {
      blueId: '9TCszX7p3useiqzNm9UPp1AMdorfkHLknXYXqEVsE2N8',
    },
  },
  dateAdjustments: {
    description:
      'Date adjustments for all unadjusted dates in this dividend period.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AKAczd79wtoD2Vt7VjdFdnWeacw86mQTVeLcyS9SWFZz',
    },
  },
  description:
    'Time bounded dividend payment periods, each with a dividend payment date per period.',
  dividendPaymentDate: {
    description:
      'Specifies when the dividend will be paid to the receiver of the equity return. Has the meaning as defined in the ISDA 2002 Equity Derivatives Definitions. Is not applicable in the case of a dividend reinvestment election.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '25Xp4tJRaZyv2LV8rPbZoJ9iLwHnmizsWJiCcXHiLx75',
    },
  },
  dividendValuationDate: {
    description: 'Specifies the dividend valuation dates of the swap.',
    type: {
      blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
    },
  },
  endDate: {
    description: 'Dividend period end date.',
    type: {
      blueId: '25Xp4tJRaZyv2LV8rPbZoJ9iLwHnmizsWJiCcXHiLx75',
    },
  },
  name: 'cdm/product/asset/DividendPeriod',
  startDate: {
    description: 'Dividend period start date.',
    type: {
      blueId: '25Xp4tJRaZyv2LV8rPbZoJ9iLwHnmizsWJiCcXHiLx75',
    },
  },
};

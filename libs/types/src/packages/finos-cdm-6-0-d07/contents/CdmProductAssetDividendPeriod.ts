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
      blueId: '8ZhZC2EwhTqHnDvvcr2ZW4iwCBJM57NcLAqPCd8shypq',
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
      blueId: '555tJWt9LFti4PXtFTEEG8bsobDUDp2ySsgK7sB5kZZ7',
    },
  },
  dividendValuationDate: {
    description: 'Specifies the dividend valuation dates of the swap.',
    type: {
      blueId: '2Dr79mc7tDo84pCgLDhmSAuay1naC42UUovCTcaMjY5R',
    },
  },
  endDate: {
    description: 'Dividend period end date.',
    type: {
      blueId: '555tJWt9LFti4PXtFTEEG8bsobDUDp2ySsgK7sB5kZZ7',
    },
  },
  name: 'cdm/product/asset/DividendPeriod',
  startDate: {
    description: 'Dividend period start date.',
    type: {
      blueId: '555tJWt9LFti4PXtFTEEG8bsobDUDp2ySsgK7sB5kZZ7',
    },
  },
};

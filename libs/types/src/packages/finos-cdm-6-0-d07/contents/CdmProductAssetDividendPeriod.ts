export const CdmProductAssetDividendPeriod = {
  basketConstituent: {
    description:
      'For basket underliers, reference to the basket component which is paying dividends in the specified period.',
    type: {
      blueId: '6tLPRxaKr8kikEkfnoFn5a6CqY61ckSNTb2NLzfWwRb7',
    },
  },
  dateAdjustments: {
    description:
      'Date adjustments for all unadjusted dates in this dividend period.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'FzKfYNd8fJo646njaxmU3TVbk5BD8txQXnt5NUm8V7sd',
    },
  },
  description:
    'Time bounded dividend payment periods, each with a dividend payment date per period.',
  dividendPaymentDate: {
    description:
      'Specifies when the dividend will be paid to the receiver of the equity return. Has the meaning as defined in the ISDA 2002 Equity Derivatives Definitions. Is not applicable in the case of a dividend reinvestment election.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'FschfMdbVginzubUZdVVEtooCLzhymBvnVnHpkmdgsfE',
    },
  },
  dividendValuationDate: {
    description: 'Specifies the dividend valuation dates of the swap.',
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
  endDate: {
    description: 'Dividend period end date.',
    type: {
      blueId: 'FschfMdbVginzubUZdVVEtooCLzhymBvnVnHpkmdgsfE',
    },
  },
  name: 'cdm/product/asset/DividendPeriod',
  startDate: {
    description: 'Dividend period start date.',
    type: {
      blueId: 'FschfMdbVginzubUZdVVEtooCLzhymBvnVnHpkmdgsfE',
    },
  },
} as const;

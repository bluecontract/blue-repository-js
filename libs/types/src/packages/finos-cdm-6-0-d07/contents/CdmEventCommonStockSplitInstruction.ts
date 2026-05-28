export const CdmEventCommonStockSplitInstruction = {
  adjustmentRatio: {
    description:
      'The number that denotes the cumulative quantity of post-split shares issued to shareholders versus the quantity of pre-split shares previously issued to shareholders.  This number will be multiplied by existing shares in an equity derivative contract or other positions to determine the post-split number of shares.  With regard to any reference to price, the pre-split reference price will be divided by this number to determine the post-split reference price.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  description: 'Data required to perform a stock split business event.',
  effectiveDate: {
    description:
      "The effective date of the stock split, also known as the ex-date. This is the date on which the additional shares are paid to the shareholders, or in the case of a reverse stock split, the number shares held by each shareholder is proportionally reduced.  Equity derivative transactions can be amended in firms' internal systems on such date.   In most markets, the listed stock price is reduced (or increased for a reverse stock split) to account for the split on the same date, but in some markets the price adjustment occurs on a later date.  In either case, equity derivative transactions should be amended on the date that the stocks are paid to the shareholders (or consolidated).\n",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'cdm/event/common/StockSplitInstruction',
} as const;

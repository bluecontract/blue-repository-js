export const CdmProductTemplateDividendTerms = {
  description: 'Information related to dividends and payments.',
  dividendEntitlement: {
    description:
      'Defines the date on which the receiver of the equity return is entitled to the dividend.',
    type: {
      blueId: 'CVotzT95LfpnY2dTRZM7sgw142QseC5qSBhosJ1xtHbK',
    },
  },
  manufacturedIncomeRequirement: {
    description:
      'Specifies the proportion of the value of the dividend on the borrowed shares that the borrower is legally obligated to return to the lender.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'KDqBQDTNYga8X7NLQ7JAEt4WfKWsizZQbLLCPtaLiAL',
    },
  },
  minimumBillingAmount: {
    description:
      'daily fee increments accrue until a threshold is crossed, at which point payment becomes due)',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  name: 'cdm/product/template/DividendTerms',
} as const;

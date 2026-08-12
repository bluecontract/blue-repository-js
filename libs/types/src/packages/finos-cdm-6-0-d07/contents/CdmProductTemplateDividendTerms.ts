export const CdmProductTemplateDividendTerms: Record<string, unknown> = {
  description: 'Information related to dividends and payments.',
  dividendEntitlement: {
    description:
      'Defines the date on which the receiver of the equity return is entitled to the dividend.',
    type: {
      blueId: 'CjxtggSJUeokfEBLy1LH5RuozcoZiFPdboPbkGnfaQ1L',
    },
  },
  manufacturedIncomeRequirement: {
    description:
      'Specifies the proportion of the value of the dividend on the borrowed shares that the borrower is legally obligated to return to the lender.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'G4dRtYHi6XSLg4caxcfJcag7cDcQqTHo18B5pymZAFSP',
    },
  },
  minimumBillingAmount: {
    description:
      'daily fee increments accrue until a threshold is crossed, at which point payment becomes due)',
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  name: 'cdm/product/template/DividendTerms',
};

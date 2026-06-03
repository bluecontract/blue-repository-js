export const CdmProductTemplateDividendTerms: Record<string, unknown> = {
  description: 'Information related to dividends and payments.',
  dividendEntitlement: {
    description:
      'Defines the date on which the receiver of the equity return is entitled to the dividend.',
    type: {
      blueId: '5A3hCLVC8huTr312Z9ddi2snvyWozZsHadHLetvYe31g',
    },
  },
  manufacturedIncomeRequirement: {
    description:
      'Specifies the proportion of the value of the dividend on the borrowed shares that the borrower is legally obligated to return to the lender.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'CXNX5xUoDwJxfTwLJdwkuXkNThirm3BpXK2QCH6kBkeu',
    },
  },
  minimumBillingAmount: {
    description:
      'daily fee increments accrue until a threshold is crossed, at which point payment becomes due)',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  name: 'cdm/product/template/DividendTerms',
};

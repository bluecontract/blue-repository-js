export const CdmProductTemplateReturnTerms = {
  correlationReturnTerms: {
    description:
      'Return terms based upon the observed correlation between the components of the underlying basket.',
    type: {
      blueId: 'HqY3kSqV1NfLvT5YLvitQ5Nq1sktFe6oA5AqyQC1j9jT',
    },
  },
  description: 'Specifies the type of return of a performance payout.',
  dividendReturnTerms: {
    description:
      'Return terms based upon dividend payments associated to the underlier.',
    type: {
      blueId: '7h8FScnN4pQLHjNkSJKae9Pz8U5rCRfseiLcscSpZTss',
    },
  },
  name: 'cdm/product/template/ReturnTerms',
  priceReturnTerms: {
    description: "Return terms based upon the underlier's observed price.",
    type: {
      blueId: '7YFwQGbWnfaZ3YgwzGGgdBhyDppvFGTH2LibSGzdhSnH',
    },
  },
  varianceReturnTerms: {
    description:
      "Return terms based upon the observed variance of the underlier's price.",
    type: {
      blueId: 'DyvMnYXfQRGwqfP9Kybg1qYNhMuFyGyMpw3x1vAopkmX',
    },
  },
  volatilityReturnTerms: {
    description:
      "Return terms based upon the observed volatility of the underlier's price.",
    type: {
      blueId: '3e4M5cnE53HFtp4uJHoNYZeL1Vwo4xTDK6XJh5tNRiGb',
    },
  },
} as const;

export const CdmObservableAssetDividendApplicability: Record<string, unknown> =
  {
    additionalDividends: {
      description:
        'If present and true, then additional dividends are applicable.',
      type: {
        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
      },
    },
    allDividends: {
      description:
        "Represents the European Master Confirmation value of 'All Dividends' which, when applicable, signifies that, for a given Ex-Date, the daily observed Share Price for that day is adjusted (reduced) by the cash dividend and/or the cash value of any non cash dividend per Share (including Extraordinary Dividends) declared by the Issuer. All Dividends in accordance with the ISDA 2002 Equity Derivatives Definitions.\n",
      type: {
        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
      },
    },
    description: 'The parameters which define whether dividends are applicable',
    name: 'cdm/observable/asset/DividendApplicability',
    optionsExchangeDividends: {
      description:
        'If present and true, then options exchange dividends are applicable.',
      type: {
        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
      },
    },
  };

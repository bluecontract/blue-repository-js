export const CdmObservableAssetPremiumExpression: Record<string, unknown> = {
  description:
    'This class corresponds to the FpML Premium.model group for representing the option premium when expressed in a way other than an amount.\n',
  name: 'cdm/observable/asset/PremiumExpression',
  percentageOfNotional: {
    description:
      'The amount of premium to be paid expressed as a percentage of the notional value of the transaction. A percentage of 5% would be expressed as 0.05.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  premiumType: {
    description: 'Forward start premium type',
    type: {
      blueId: 'HsnQM55utMJ2MK1JFiAmmg7CVx7NSKY33Ecru99LtN2H',
    },
  },
  pricePerOption: {
    description:
      'The amount of premium to be paid expressed as a function of the number of options.',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
};

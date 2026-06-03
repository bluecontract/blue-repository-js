export const CdmObservableAssetValuationSource: Record<string, unknown> = {
  dealerOrCCP: {
    description:
      'Holds an identifier for the reference entity that is agreed by both parties as a basis for cash settlement calculations. This could be a dealer from whom quotations are obtained by the calculation agent on the reference obligation for purposes of cash settlement in a credit event. ISDA 2003 Term: Dealer. This could be the clearing organization (CCP, DCO) to which the trade should be cleared, as applicable for cash-settled swaptions.\n',
    type: {
      blueId: '5xa7EuQoL6MHLEkfe2xUYenDRD52BrW1dDcJHWhB4zFP',
    },
  },
  description:
    'A class describing the method for obtaining a settlement rate, specified through either an information source (page), a settlement rate option (fixing) or by using quotes from reference banks.\n',
  informationSource: {
    description:
      'The information source where a published or displayed market rate will be obtained, e.g. Telerate Page 3750.',
    type: {
      blueId: 'AxAyn6UgyoJj9YDT4soz7eYpmhL8U6kEzFxGMonZgxcg',
    },
  },
  name: 'cdm/observable/asset/ValuationSource',
  quotedCurrencyPair: {
    description:
      "Defines the two currencies for an FX trade and the quotation relationship between the two currencies.  This attribute was formerly part of 'fxSettlementTerms', which is now being harmonised into a common 'CashSettlementTerms' that includes a 'ValuationDate'.\n",
    type: {
      blueId: 'AyEBp4Mbar43fuYsMicvQsPWCtvzqv7kEt3G9UEdSbHx',
    },
  },
  referenceBanks: {
    description:
      'A container for a set of reference institutions that may be called upon to provide rate quotations as part of the method to determine the applicable cash settlement amount. If institutions are not specified, it is assumed that reference institutions will be agreed between the parties on the exercise date, or in the case of swap transaction to which mandatory early termination is applicable, the cash settlement valuation date.\n',
    type: {
      blueId: 'Dr7s6cFbs9aSU7RTFMQNVdpt9CuuUy3nRKpnUmXo3cbD',
    },
  },
  settlementRateOption: {
    description:
      'The rate option to use for the fixing. Currently only applicable to foreign exchange fixing in case of cross-currency settlement.\n',
    type: {
      blueId: '4fDBuDhuDX6EwGXzGFCqTDbxE4JukhE8mVQ8BFtq5d3j',
    },
  },
};

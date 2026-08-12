export const CdmObservableAssetMultipleValuationDates: Record<string, unknown> =
  {
    businessDays: {
      description:
        'A number of business days. Its precise meaning is dependant on the context in which this element is used. ISDA 2003 Term: Business Day.\n',
      type: {
        blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
      },
    },
    businessDaysThereafter: {
      description:
        'The number of business days between successive valuation dates when multiple valuation dates are applicable for cash settlement. ISDA 2003 Term: Business Days thereafter.\n',
      type: {
        blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
      },
    },
    name: 'cdm/observable/asset/MultipleValuationDates',
    numberValuationDates: {
      description:
        'Where multiple valuation dates are specified as being applicable for cash settlement, this element specifies (a) the number of applicable valuation dates, and (b) the number of business days after satisfaction of all conditions to settlement when the first such valuation date occurs, and (c) the number of business days thereafter of each successive valuation date. ISDA 2003 Term: Multiple Valuation Dates.\n',
      type: {
        blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
      },
    },
  };

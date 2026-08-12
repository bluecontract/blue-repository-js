export const CdmObservableAssetPriceQuantity: Record<string, unknown> = {
  description:
    'Defines a settlement as an exchange between two parties of a specified quantity of an asset (the quantity) against a specified quantity of another asset (the price). The settlement is optional and can be either cash or physical. The quantity can additionally be specified in terms of one or more currency amounts. In the case of non-cash products, the settlement of the price/quantity would not be specified here and instead would be delegated to the product mechanics, as parameterised by the price/quantity values.\n',
  effectiveDate: {
    description:
      'Specifies the date at which the price and quantity become effective. This day may be subject to adjustment in accordance with a business day convention, or could be specified as relative to a trade date, for instance. Optional cardinality, as the effective date is usually specified in the product definition, so it may only need to be specified as part of the PriceQuantity in an increase/decrease scenario for an existing trade.\n',
    type: {
      blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
    },
  },
  name: 'cdm/observable/asset/PriceQuantity',
  observable: {
    description:
      'Specifies the object to be observed for a price, it could be an asset or an index. The cardinality is optional as some quantity / price cases have no observable (e.g. a fixed rate in a given currency).\n',
    type: {
      blueId: 'F7sFzXWUzuCitCY1sux6JewiNm7FurU1UY6DDXgYdozC',
    },
  },
  price: {
    description:
      'Specifies a price to be used for trade amounts and other purposes.',
    itemType: {
      blueId: 'D56TQGXSu2P9sUf1weZUW49yhP5PW6GhYpB3gZeABsUn',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  quantity: {
    description:
      'Specifies a quantity to be associated with an event, for example a trade amount.',
    itemType: {
      blueId: 'FCaGFiACv9gh7BbLiPZYLCDttHSuo2J6u9uyRkQbxeSw',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};

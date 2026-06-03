export const CdmProductTemplateTradableProduct: Record<string, unknown> = {
  adjustment: {
    description:
      'Specifies the conditions that govern the adjustment to the quantity of a product being traded: e.g. execution, portfolio rebalancing etc. It is typically used in the context of Equity Swaps.\n',
    type: {
      blueId: 'Fu36EUGcA7u8BqhZftYyUEUqgrd4mi4LXffiZx7DXTvo',
    },
  },
  ancillaryParty: {
    description:
      'Specifies the parties with ancillary roles in the transaction. The product is agnostic to the actual parties involved in the transaction, with the party references abstracted away from the product definition and replaced by the AncillaryRoleEnum. The AncillaryRoleEnum can then be positioned in the product and this AncillaryParty type, which is positioned outside of the product definition, allows the AncillaryRoleEnum to be associated with an actual party reference.\n',
    itemType: {
      blueId: '3FLaoJ8BXZUb3VpFoXQ7ACwUhTaDAZgwztubj17GegH4',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  counterparty: {
    description:
      'Specifies the parties which are the two counterparties to the transaction.  The product is agnostic to the actual parties to the transaction, with the party references abstracted away from the product definition and replaced by the counterparty enum (e.g. CounterpartyEnum values Party1 or Party2). The counterparty enum can then be positioned in the product (e.g. to specify which counterparty is the payer, receiver etc) and this counterparties attribute, which is positioned outside of the product definition, allows the counterparty enum to be associated with an actual party reference.\n',
    itemType: {
      blueId: '58TeStN7sJrzoG3o1U7FZq3fFkxbCXkvdWPYYZkf1r3x',
    },
    schema: {
      maxItems: 2,
      minItems: 2,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Definition of a product as ready to be traded, i.e. included in an execution or contract, by associating a specific price and quantity to this product plus an (optional) mechanism for any potential future quantity adjustment.\n',
  name: 'cdm/product/template/TradableProduct',
  product: {
    description:
      'The underlying product to be included in a contract or execution.',
    schema: {
      required: true,
    },
    type: {
      blueId: '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#4',
    },
  },
  tradeLot: {
    description:
      'Specifies the price, quantity and effective date of each trade lot, when the same product may be traded multiple times in different lots with the same counterparty. In a trade increase, a new trade lot is added to the list, with the corresponding effective date. In a trade decrease, the existing trade lot(s) are decreased of the corresponding quantity (and an unwind fee may have to be settled). The multiple cardinality and the ability to increase existing trades is used for Equity Swaps in particular.\n',
    itemType: {
      blueId: 'BmdnVkDXfdg2N2r7qgbCGTcmvRVJJCeGYWgqPEVPtqns',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};

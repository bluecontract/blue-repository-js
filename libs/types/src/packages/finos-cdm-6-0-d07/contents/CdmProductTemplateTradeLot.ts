export const CdmProductTemplateTradeLot: Record<string, unknown> = {
  description:
    'Specifies the price and quantity of a trade lot, where the same product could be traded multiple times with the same counterparty but in different lots (at a different date, in a different quantity and at a different price). One trade lot combined with a product definition specifies the entire economics of a trade. The lifecycle mechanics of each such trade lot (e.g. cashflow payments) is independent of the other lots.\n',
  lotIdentifier: {
    description: 'Specifies one or more identifiers for the lot, if any.',
    itemType: {
      blueId: '2uYMDSb9jahYcE91VXzzWYsnUVct3k5thb1czx4jPYF7',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'cdm/product/template/TradeLot',
  priceQuantity: {
    description:
      'Specifies the settlement characteristics of a trade lot: price, quantity, observable (optionally) and the settlement terms. This attribute has a multiple cardinality to allow to specify the price, quantity and observable of different legs in a single, composite product (e.g. a Swap).\n',
    itemType: {
      blueId: '4XEYGgCSfXx2tFwmQjMsXhuwaCjsNZ42jtKAcr8itiqe',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};

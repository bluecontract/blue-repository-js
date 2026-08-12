export const CdmProductTemplateNonTransferableProduct: Record<string, unknown> =
  {
    description:
      "A data type to specify the financial product's economic terms, alongside the product identification and product taxonomy. The non-transferable product data type represents a product that can be traded (as part of a TradableProduct) but cannot be transferred to others.  It is meant to be used across the pre-execution, execution and (as part of the Contract) post-execution lifecycle contexts.\n",
    economicTerms: {
      description:
        'The price forming features, including payouts and provisions.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'this#9',
      },
    },
    identifier: {
      description:
        'Comprises a identifier and a source to uniquely identify the nonTransferableProduct.',
      itemType: {
        blueId: 'FnPPihH443SKbNrwapeK3w4TS3YG23ns1dkQMnVkD5fp',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    name: 'cdm/product/template/NonTransferableProduct',
    taxonomy: {
      description:
        'Specifies the product taxonomy, which is composed of a taxonomy value and a taxonomy source.',
      itemType: {
        blueId: 'zhu6Vg1U6muAYReiYsG2Xh1wrN4VDaeeREHBY7A8wtc',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
  };

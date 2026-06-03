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
        blueId: 'this#6',
      },
    },
    identifier: {
      description:
        'Comprises a identifier and a source to uniquely identify the nonTransferableProduct.',
      itemType: {
        blueId: 'GFVh22HvpZREhKsn8HDuBiUrwRScVzwx6ZnNNmZrisx9',
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
        blueId: '4Yp9gtVpX1NNhVLvRCpFGS3MvbUnmDXUmuAKSDYaTNWN',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
  };

export const CdmProductTemplateNonTransferableProduct = {
  description:
    "A data type to specify the financial product's economic terms, alongside the product identification and product taxonomy. The non-transferable product data type represents a product that can be traded (as part of a TradableProduct) but cannot be transferred to others.  It is meant to be used across the pre-execution, execution and (as part of the Contract) post-execution lifecycle contexts.\n",
  economicTerms: {
    description:
      'The price forming features, including payouts and provisions.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'this#4',
    },
  },
  identifier: {
    description:
      'Comprises a identifier and a source to uniquely identify the nonTransferableProduct.',
    itemType: {
      blueId: 'K1T3rxTw4qgMTWWXRK65HvnRu9dEGYUj1dnWgD8wJyS',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  name: 'cdm/product/template/NonTransferableProduct',
  taxonomy: {
    description:
      'Specifies the product taxonomy, which is composed of a taxonomy value and a taxonomy source.',
    itemType: {
      blueId: '2VvT5a944fY15VZhySKrqEWBUHdaz3WdLPPyU9TEVSQC',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;

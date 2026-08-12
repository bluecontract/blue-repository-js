export const CdmProductTemplateUnderlier: Record<string, unknown> = {
  description:
    'The underlying financial product that will be physically or cash settled, which can be of any type, eg an asset such as cash or a security, a product, or the cash settlement of an index rate.  Conditions are usually applied when used in a data type, such as a payout, to ensure this aligns with the use case.\n',
  name: 'cdm/product/template/Underlier',
  Observable: {
    description:
      'Specifies the object to be observed for a price, it could be an asset or a reference.',
    type: {
      blueId: '29tRf6HKyJ5PZ7qSgJmiEnuDwSx7xXy8vHzP4X2PfJU8',
    },
  },
  Product: {
    description:
      'Enables either a TransferableProduct or a NonTransferableProduct to be used in an underlier.',
    type: {
      blueId: 'this#0',
    },
  },
};

export const CdmProductTemplateProduct: Record<string, unknown> = {
  description:
    'Enables either a TransferableProduct or a NonTransferableProduct to be used in an underlier.',
  name: 'cdm/product/template/Product',
  NonTransferableProduct: {
    description:
      'The non-transferable product data type represents a product that can be traded (as part of a TradableProduct) but cannot be transferred to others.\n',
    type: {
      blueId: 'this#5',
    },
  },
  TransferableProduct: {
    description:
      'A TransferableProduct is a type of financial product which can be held or transferred, represented as an Asset with the addition of specific EconomicTerms.\n',
    type: {
      blueId: 'this#1',
    },
  },
};

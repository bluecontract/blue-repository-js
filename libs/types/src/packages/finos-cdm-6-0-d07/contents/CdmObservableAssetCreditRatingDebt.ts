export const CdmObservableAssetCreditRatingDebt: Record<string, unknown> = {
  debtType: {
    description:
      "Specifies when there is only one debt type. FpML doesn't specify values in relation to the associated scheme, which is hence not specified as an enumeration as part of the CDM.\n",
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  debtTypes: {
    description:
      "Specifies if there are several debt types, alongside an 'any' or 'all' or all condition. As an example, Baa1 rating is required for any long term debt and deposit.\n",
    type: {
      blueId: 'AsVDMXdzj7YUDAbB74UjAitv1ft5nufzbBHu7aR8iHES',
    },
  },
  description:
    "Specifies the credit rating debt type(s) associated with the credit rating notation and scale. When several debt types are specified, they must be qualified through an 'any' or 'all'.\n",
  name: 'cdm/observable/asset/CreditRatingDebt',
};

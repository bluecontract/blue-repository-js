export const CdmObservableAssetMultipleDebtTypes: Record<string, unknown> = {
  condition: {
    description:
      'An enumerated attribute, to qualify whether All or Any debt type applies.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9rM943Zxj8XaBwwWtrihnmzqSxuoYsj5tqms4JHHt3AG',
    },
  },
  debtType: {
    description:
      "The type of debt, e.g. long term debt, deposit, ... FpML doesn't specific a scheme value, hence no enumeration is specified as part of the CDM. At least two debt types much be specified.\n",
    itemType: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
    schema: {
      minItems: 2,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    "Represents a class to specify multiple credit debt types alongside a conditional 'any' or 'all' qualifier.",
  name: 'cdm/observable/asset/MultipleDebtTypes',
};

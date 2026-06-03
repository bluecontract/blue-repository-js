export const CdmObservableAssetMultipleDebtTypes: Record<string, unknown> = {
  condition: {
    description:
      'An enumerated attribute, to qualify whether All or Any debt type applies.',
    schema: {
      required: true,
    },
    type: {
      blueId: '5AmXPpNccrpoL5H4BBSk9y2QfnizHY6JKgXqaHJTHgvy',
    },
  },
  debtType: {
    description:
      "The type of debt, e.g. long term debt, deposit, ... FpML doesn't specific a scheme value, hence no enumeration is specified as part of the CDM. At least two debt types much be specified.\n",
    itemType: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
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

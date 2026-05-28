export const CdmObservableAssetMultipleDebtTypes = {
  condition: {
    description:
      'An enumerated attribute, to qualify whether All or Any debt type applies.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '63nKry6nGnCtyHC4B341Sun8eUejEvoq7JeK4A4AY7Er',
    },
  },
  debtType: {
    description:
      "The type of debt, e.g. long term debt, deposit, ... FpML doesn't specific a scheme value, hence no enumeration is specified as part of the CDM. At least two debt types much be specified.\n",
    itemType: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    "Represents a class to specify multiple credit debt types alongside a conditional 'any' or 'all' qualifier.",
  name: 'cdm/observable/asset/MultipleDebtTypes',
} as const;

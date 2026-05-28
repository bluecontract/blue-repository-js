export const CdmProductCollateralCollateralTreatment = {
  concentrationLimit: {
    description:
      'Specification of concentration limits applicable to the collateral criteria.',
    itemType: {
      blueId: '7JhDBQ8P99z1vkjs3NtSrZYQwsbwwMPjU8BSR4sjD7c5',
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
  description:
    'Specifies the treatment terms for the eligible collateral criteria specified.',
  isIncluded: {
    description:
      'A boolean attribute to specify whether collateral critieria are inclusion (True) or exclusion (False) criteria.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/product/collateral/CollateralTreatment',
  valuationTreatment: {
    description:
      'Specification of the valuation treatment for the specified collateral.',
    type: {
      blueId: '5tTMFMnH6nTLVpswR4BaaD9sD5W22HSgJu5F8iTop8AS',
    },
  },
} as const;

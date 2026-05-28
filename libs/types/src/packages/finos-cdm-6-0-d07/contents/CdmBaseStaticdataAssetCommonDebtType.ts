export const CdmBaseStaticdataAssetCommonDebtType = {
  debtClass: {
    description: 'Specifies the characteristics of a debt instrument.',
    type: {
      blueId: 'Gc9TLaZnGNEqejv5pHhE4uD3fJKegqfQCT1Wo76Ca5wx',
    },
  },
  debtEconomics: {
    description: 'Specifies selected financial terms of a debt instrument.',
    itemType: {
      blueId: '3FVbfvSZd1U3oZCBpPH9cRkbM4Ef9NXGE6jVV4jLCedz',
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
  description: 'Specifies the type of debt instrument.',
  name: 'cdm/base/staticdata/asset/common/DebtType',
} as const;

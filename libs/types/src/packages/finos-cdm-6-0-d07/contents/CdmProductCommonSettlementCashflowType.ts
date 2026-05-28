export const CdmProductCommonSettlementCashflowType = {
  cashflowType: {
    description: 'Type of cashflow corresponding to a scheduled event.',
    type: {
      blueId: 'H7iPS6CrsvGu1PXNutZkgqEEQDC4jBXCMGkL1Ku6TxLf',
    },
  },
  cashPrice: {
    description:
      'Type of cashflow corresponding to a non-scheduled event, where a price must be agreed between the parties.',
    type: {
      blueId: 'EBxPTGdUnubTi1nPQX8vJqTa8Q5FX7fvkCdtYQrZyUdg',
    },
  },
  description:
    'Characterises the type of cashflow, which can result from either a scheduled or a non-scheduled lifecycle event.\n',
  name: 'cdm/product/common/settlement/CashflowType',
  priceExpression: {
    type: {
      blueId: '5oss5vAthfdDyx4i1CUcAgeHxzWsk2SCDGWtrZ76qZzi',
    },
  },
} as const;

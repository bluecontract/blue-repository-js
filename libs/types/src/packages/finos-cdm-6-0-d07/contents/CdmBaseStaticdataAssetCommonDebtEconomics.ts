export const CdmBaseStaticdataAssetCommonDebtEconomics: Record<
  string,
  unknown
> = {
  debtInterest: {
    description:
      'Specifies the general rule for periodic interest rate payment.',
    type: {
      blueId: 'CKeQ92fWPg4Y5pBNbpKczdPnPQQ8erD4GHJk9jUQJ2bD',
    },
  },
  debtPrincipal: {
    description: 'Specifies the general rule for repayment of principal.',
    type: {
      blueId: '6BJ4CubLVSgwchKqdWjX3bW3sPCa6dktMHc8CJzQM6HT',
    },
  },
  debtSeniority: {
    description:
      'Specifies the order of repayment in the event of a sale or bankruptcy of the issuer or a related party (eg guarantor).\n',
    type: {
      blueId: '2T9bE3hBaZbmmKhFKA3Vw77BMH3N5vRZDgjh4BBTWvuS',
    },
  },
  description: 'Specifies selected economics of a debt instrument.',
  name: 'cdm/base/staticdata/asset/common/DebtEconomics',
};

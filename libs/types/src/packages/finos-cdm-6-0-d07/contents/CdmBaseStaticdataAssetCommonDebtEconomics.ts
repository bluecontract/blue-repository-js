export const CdmBaseStaticdataAssetCommonDebtEconomics = {
  debtInterest: {
    description:
      'Specifies the general rule for periodic interest rate payment.',
    type: {
      blueId: '8XrxPP2rP3zwDTjRoHPp75ydfxNSwRdzq7SDXWdu6wkm',
    },
  },
  debtPrincipal: {
    description: 'Specifies the general rule for repayment of principal.',
    type: {
      blueId: '7amP8mEsUdLRShji4Z8rjnewniyvxfvsXM3DW9cmZ4ei',
    },
  },
  debtSeniority: {
    description:
      'Specifies the order of repayment in the event of a sale or bankruptcy of the issuer or a related party (eg guarantor).\n',
    type: {
      blueId: 'E6Tfme4krXS9rATBWNUAkF3zodjRvrY68ugTnUpjH7da',
    },
  },
  description: 'Specifies selected economics of a debt instrument.',
  name: 'cdm/base/staticdata/asset/common/DebtEconomics',
} as const;

export const CdmBaseStaticdataAssetCommonDebtEconomics: Record<
  string,
  unknown
> = {
  debtInterest: {
    description:
      'Specifies the general rule for periodic interest rate payment.',
    type: {
      blueId: 'ABWJdWCyzqLnaaGxRmBVDvKESHeps7uTHXPreA7Ki6WC',
    },
  },
  debtPrincipal: {
    description: 'Specifies the general rule for repayment of principal.',
    type: {
      blueId: '6QJ9VwESPyRj4k8DnDFtvDTmqHcX6P3tTKqXTdEJqiXb',
    },
  },
  debtSeniority: {
    description:
      'Specifies the order of repayment in the event of a sale or bankruptcy of the issuer or a related party (eg guarantor).\n',
    type: {
      blueId: 'CmJXdH7HwBcN8C6x55jb2XfMQpNkC5PTXYTkLaejGQPm',
    },
  },
  description: 'Specifies selected economics of a debt instrument.',
  name: 'cdm/base/staticdata/asset/common/DebtEconomics',
};

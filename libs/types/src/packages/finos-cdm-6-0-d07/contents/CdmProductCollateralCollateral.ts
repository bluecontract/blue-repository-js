export const CdmProductCollateralCollateral: Record<string, unknown> = {
  collateralPortfolio: {
    description:
      'The collateral portfolios which contain the collateral which covers a trade. (NB: this can be provided by reference to a global key for each CollateralPortfolio object)\n',
    itemType: {
      blueId: '4BrXNc4oFsUfnFzm3uWTqNmgivGhZJRmaoxvb8kK9xiw',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  collateralProvisions: {
    description: 'specifies the collateral provisions of the product.',
    type: {
      blueId: 'EE9ddWepUCVpA88PcNq8buPwyuFbJawoqrJwAAwpCjcx',
    },
  },
  description:
    'A type for defining the obligations of the counterparty subject to credit support requirements.',
  independentAmount: {
    description:
      "Independent Amount is an amount that usually less creditworthy counterparties are asked to provide. It can either be a fixed amount or a percentage of the Transaction's value. The Independent Amount can be: (i) transferred before any trading between the parties occurs (as a deposit at a third party's account or with the counterparty) or (ii) callable after trading has occurred (typically because a downgrade has occurred). In situation (i), the Independent Amount is not included in the calculation of Exposure, but in situation (ii), it is included in the calculation of Exposure. Thus, for situation (ii), the Independent Amount may be transferred along with any collateral call. Independent Amount is a defined term in the ISDA Credit Support Annex. ('with respect to a party, the amount specified as such for that party in Paragraph 13; if no amount is specified, zero').\n",
    type: {
      blueId: 'Bx6RbJH85Gh7BbnBoSUaTvzqwCNheMpjmwzdouE6UJz',
    },
  },
  name: 'cdm/product/collateral/Collateral',
  portfolioIdentifier: {
    description:
      'A list of identifiers pointing to the collateral portfolios which contain the collateral which covers a trade.',
    itemType: {
      blueId: '9tpFoqFu1yX5LZEATGF8CYsE5VSXhkQua9LMXwLEX2Pv',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};

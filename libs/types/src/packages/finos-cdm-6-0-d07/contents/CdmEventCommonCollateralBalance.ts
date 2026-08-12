export const CdmEventCommonCollateralBalance: Record<string, unknown> = {
  amountBaseCurrency: {
    description:
      'Specifies the collateral balance amount in base currency determined within a collateral legal agreement, or defined for reporting purposes.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  collateralBalanceStatus: {
    description:
      'Defines the collateral balance breakdown of settlement status.',
    type: {
      blueId: '6ctehAVhDiuTwXfG2zzPiqjPq4Chs91k7cZy6gJecUMe',
    },
  },
  description:
    'Represents common attributes to define a collateral balance recorded by the principal as held or posted.',
  haircutIndicator: {
    description:
      'Indicates if the collateral balance amount is based on pre or post haircut, if a haircut is associated with the collateral asset\n',
    type: {
      blueId: '7jzEk39QMqbmzpmZF3CL3GVht2Z2MUCgbVA9Xjjcwirk',
    },
  },
  name: 'cdm/event/common/CollateralBalance',
  payerReceiver: {
    description:
      'Specifies each of the parties in the collateral balance and its perspective with regards to the direction of the collateral balance, posted or received.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '63Bw1Ena6g9zgLcVwPkkpApxNVecQwz8Ygi9rZZFYMoB',
    },
  },
};

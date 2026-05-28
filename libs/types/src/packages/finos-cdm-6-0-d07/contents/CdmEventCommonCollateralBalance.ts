export const CdmEventCommonCollateralBalance = {
  amountBaseCurrency: {
    description:
      'Specifies the collateral balance amount in base currency determined within a collateral legal agreement, or defined for reporting purposes.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  collateralBalanceStatus: {
    description:
      'Defines the collateral balance breakdown of settlement status.',
    type: {
      blueId: 'ET5sToBGwmEYMrixxQtBQCXUeukfnnYAJugSx43kxbwm',
    },
  },
  description:
    'Represents common attributes to define a collateral balance recorded by the principal as held or posted.',
  haircutIndicator: {
    description:
      'Indicates if the collateral balance amount is based on pre or post haircut, if a haircut is associated with the collateral asset\n',
    type: {
      blueId: '6dsiwJuR69CVpGRuRqj3ymfDhYpGGDRtLQLHmTZMqGC',
    },
  },
  name: 'cdm/event/common/CollateralBalance',
  payerReceiver: {
    description:
      'Specifies each of the parties in the collateral balance and its perspective with regards to the direction of the collateral balance, posted or received.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5jMMKaokSyc3P5cYsiGHgYgok3sYf3J1f3Cq4Ue2LX4C',
    },
  },
} as const;

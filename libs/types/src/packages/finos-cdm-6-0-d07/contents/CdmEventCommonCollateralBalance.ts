export const CdmEventCommonCollateralBalance: Record<string, unknown> = {
  amountBaseCurrency: {
    description:
      'Specifies the collateral balance amount in base currency determined within a collateral legal agreement, or defined for reporting purposes.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  collateralBalanceStatus: {
    description:
      'Defines the collateral balance breakdown of settlement status.',
    type: {
      blueId: 'ScqKZW3m5Vk4Ht3xpASxxv9euZM32FQPYjE6PbCZEHc',
    },
  },
  description:
    'Represents common attributes to define a collateral balance recorded by the principal as held or posted.',
  haircutIndicator: {
    description:
      'Indicates if the collateral balance amount is based on pre or post haircut, if a haircut is associated with the collateral asset\n',
    type: {
      blueId: 'BhcAc9aom3oN5CJ2MVXmyyUEeSBLxX3PgyuKursXD5hQ',
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
      blueId: '2LmejohDGLXaXF2jDmkccaa7GSQbnbp8iBMKmrxifhWs',
    },
  },
};

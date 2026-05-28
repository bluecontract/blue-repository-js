export const CdmEventCommonCollateralPosition = {
  cashBalance: {
    description: 'The aggregate cost of proceeds',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  collateralPositionStatus: {
    description: 'Indicates the collateral positions settlement status.',
    type: {
      blueId: 'ET5sToBGwmEYMrixxQtBQCXUeukfnnYAJugSx43kxbwm',
    },
  },
  description: 'Specifies the individual components of collateral positions.',
  name: 'cdm/event/common/CollateralPosition',
  priceQuantity: {
    description: 'Position with many price quantities.',
    itemType: {
      blueId: '3M3Dq9Mg9Eq1zojVRM5ZJVz9nV2VfXFeSLB6TnvKozYs',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  product: {
    description: 'The product underlying the position.',
    type: {
      blueId: 'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#0',
    },
  },
  tradeReference: {
    description:
      'Reference to the Contract, in case product is contractual and the contract has been formed',
    type: {
      blueId: 'DXhfNgQ1Hmipx5YJVPFZLYTAfk5vomh4ywYmSZX1ChyJ',
    },
  },
  treatment: {
    description:
      'Specifies if there is any treatment to be applied to collateral, such as percentage discount which will impact collateral value.\n',
    type: {
      blueId: 'BL9z4RShUcNi4oWpkU2pgnaKF2vGwrxjpJBWWMAUruzN',
    },
  },
} as const;

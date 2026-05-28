export const CdmEventPositionPosition = {
  cashBalance: {
    description: 'The aggregate cost of proceeds',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  description:
    'A Position describes how much of a given Product is being held and constitutes the atomic element of a Portfolio.\n',
  name: 'cdm/event/position/Position',
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
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
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
} as const;

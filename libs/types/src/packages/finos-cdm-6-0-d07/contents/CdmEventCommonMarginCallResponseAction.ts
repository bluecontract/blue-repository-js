export const CdmEventCommonMarginCallResponseAction = {
  collateralPositionComponent: {
    description: 'Specifies the collateral to be moved and its direction.',
    itemType: {
      blueId: 'RkQ9hssWBiUyn4LiaktzsRVjx76PDv5qNq4T8YionjL',
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
  description:
    'Specifies the margin call action details, including collateral to be moved and its direction.',
  marginCallAction: {
    description:
      'Specifies the margin call action details, specified as either Delivery or Return.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '6tjVZ5NjLm5HQgsKdMnRgy9TgumvEg9qnjDmMth7np6R',
    },
  },
  name: 'cdm/event/common/MarginCallResponseAction',
} as const;

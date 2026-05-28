export const CdmEventCommonCalculateTransferInstruction = {
  date: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Defines the tradeState or payout on which to create a Transfer along with all necessary resets.',
  name: 'cdm/event/common/CalculateTransferInstruction',
  payerReceiver: {
    type: {
      blueId: 'Cx2eHN58eqWKXnZwn6JDYBzAfG95QSEAWjQhbX1R5An3',
    },
  },
  payout: {
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '529d4eeRPqjy1E5t4zWJpWVA2HKzpHHLCXrsg3D3pMZQ',
    },
  },
  quantity: {
    description:
      'Specifies quantity amount returned if not the full amount from the TradeState, e.g. partial return',
    type: {
      blueId: '2uPPgn1ZsbovDfjRb1d8M9YmmgEnNo9UeG1VEz2wceY3',
    },
  },
  resets: {
    itemType: {
      blueId: '14sVVTzSacMzHornDaXpUxvVuwj3EZYsDLgepvsmbGW7',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  tradeState: {
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'J8SrPWrtbe4J2GJXdDo51yKLW7GpaZmwrtGnvLKFRArQ',
    },
  },
} as const;

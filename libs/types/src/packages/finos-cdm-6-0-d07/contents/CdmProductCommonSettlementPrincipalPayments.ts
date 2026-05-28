export const CdmProductCommonSettlementPrincipalPayments = {
  description:
    'A class defining which principal exchanges occur for the stream.',
  finalPayment: {
    description:
      'A true/false flag to indicate whether there is a final exchange of principal on the termination date.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  initialPayment: {
    description:
      'A true/false flag to indicate whether there is an initial exchange of principal on the effective date.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  intermediatePayment: {
    description:
      'A true/false flag to indicate whether there are intermediate or interim exchanges of principal during the term of the swap.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/product/common/settlement/PrincipalPayments',
  principalPaymentSchedule: {
    description:
      'Describe dates schedules for Principal Exchanges and related role of the parties when known.',
    type: {
      blueId: '4FTqK6vYmEpdwWnDuD2EjcJ7sLWWdhgeB2duLV8aA5bC',
    },
  },
  varyingLegNotionalCurrency: {
    description:
      'Indicate the Payout legs which nominal amount may vary in regards of FX Fixing dates as determined in the product terms.\n',
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
} as const;

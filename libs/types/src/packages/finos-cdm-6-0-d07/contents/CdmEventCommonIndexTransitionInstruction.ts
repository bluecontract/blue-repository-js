export const CdmEventCommonIndexTransitionInstruction = {
  cashTransfer: {
    description:
      'Specifies the cash transfer that can optionally be tied to an index transition event.',
    type: {
      blueId: '98eFnr7F52GRnD9gADRtEuqZMPpuZCmesaDMrQ7wS8Xk',
    },
  },
  description:
    'Defines the information needed to create a Index Transition Business Event.',
  effectiveDate: {
    description:
      'Specifies the effective date of the index transition event. This is first date on which the floating rate calculation will use the new floating rate index and adjusted spread in the floating rate calculation.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'cdm/event/common/IndexTransitionInstruction',
  priceQuantity: {
    description:
      'Specifies both new floating rate index and spread adjustment for each leg to be updated.  The spread adjustment accounts for the difference between the old floating rate index relative to the new one. This spread amount is added to the existing spread to determine the new spread, which is applied from the specified effective date forward. In the case of the IBOR Fallback Rate Adjustments, the adjustment spread (also known as the Fallback Adjustment) accounts for two distinctions: i) the fact that the replacement Risk-Free Rate is an overnight rate while IBORs have term structures (e.g., 1, 3, 6-month LIBOR); and (ii) the historical spread differential between IBORs and their term equivalent Overnight Risk-Free Rate compounded rates.\n',
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
} as const;

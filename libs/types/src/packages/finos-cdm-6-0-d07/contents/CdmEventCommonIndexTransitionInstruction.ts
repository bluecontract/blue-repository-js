export const CdmEventCommonIndexTransitionInstruction: Record<string, unknown> =
  {
    cashTransfer: {
      description:
        'Specifies the cash transfer that can optionally be tied to an index transition event.',
      type: {
        blueId: 'Huf4W2NzpakJVTTdkhKJriEVabT1NBezmnyTJB9Wt2Vs',
      },
    },
    description:
      'Defines the information needed to create a Index Transition Business Event.',
    effectiveDate: {
      description:
        'Specifies the effective date of the index transition event. This is first date on which the floating rate calculation will use the new floating rate index and adjusted spread in the floating rate calculation.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    name: 'cdm/event/common/IndexTransitionInstruction',
    priceQuantity: {
      description:
        'Specifies both new floating rate index and spread adjustment for each leg to be updated.  The spread adjustment accounts for the difference between the old floating rate index relative to the new one. This spread amount is added to the existing spread to determine the new spread, which is applied from the specified effective date forward. In the case of the IBOR Fallback Rate Adjustments, the adjustment spread (also known as the Fallback Adjustment) accounts for two distinctions: i) the fact that the replacement Risk-Free Rate is an overnight rate while IBORs have term structures (e.g., 1, 3, 6-month LIBOR); and (ii) the historical spread differential between IBORs and their term equivalent Overnight Risk-Free Rate compounded rates.\n',
      itemType: {
        blueId: '2C9DbWa8E4D3cXHSXuDyYmWwrs1ySFopMnyA3XWWesm8',
      },
      schema: {
        minItems: 1,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
  };

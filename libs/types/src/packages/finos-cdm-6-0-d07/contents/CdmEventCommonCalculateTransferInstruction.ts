export const CdmEventCommonCalculateTransferInstruction: Record<
  string,
  unknown
> = {
  date: {
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Defines the tradeState or payout on which to create a Transfer along with all necessary resets.',
  name: 'cdm/event/common/CalculateTransferInstruction',
  payerReceiver: {
    type: {
      blueId: '3xPof2WJyFXisFtvaxpSGddTxHyGioazbsMJjuUucbzT',
    },
  },
  payout: {
    schema: {
      required: true,
    },
    type: {
      blueId: 'B5Jakr9Bd7eaMZzThRtLAaP1ZnjC3yngwZjL4GXVZW7P',
    },
  },
  quantity: {
    description:
      'Specifies quantity amount returned if not the full amount from the TradeState, e.g. partial return',
    type: {
      blueId: 'DGJZYRtm8AD2nG2o56eH5EDc8FujZiiXmBsuHgLf3UCR',
    },
  },
  resets: {
    itemType: {
      blueId: 'C2cq6aR7yoFg7jn9vV3wrTukUrevaRzkBo4PeSWP5die',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  tradeState: {
    schema: {
      required: true,
    },
    type: {
      blueId: 'HxxzM9rdFcBDqPQ5HzDD9UxLqocN3L7WNYNZvEdpnWJd',
    },
  },
};

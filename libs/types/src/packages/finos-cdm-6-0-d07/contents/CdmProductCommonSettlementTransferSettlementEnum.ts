export const CdmProductCommonSettlementTransferSettlementEnum: Record<
  string,
  unknown
> = {
  description:
    'The enumeration values to specify how the transfer will settle, e.g. DvP.',
  name: 'cdm/product/common/settlement/TransferSettlementEnum',
  schema: {
    enum: [
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'DeliveryVersusDelivery',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'DeliveryVersusPayment',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'NotCentralSettlement',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'PaymentVersusPayment',
      },
    ],
  },
  type: {
    blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
  },
};

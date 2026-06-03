export const CdmProductCommonScheduleLag: Record<string, unknown> = {
  description:
    'The pricing period per calculation period if the pricing days do not wholly fall within the respective calculation period.\n',
  firstObservationDateOffset: {
    description:
      'Defines the offset of the series of pricing dates relative to the calculation period.',
    type: {
      blueId: 'GcgyRFiq68rKDTw1wtJsfsUpu4hBukUsv29vavmPQmrZ',
    },
  },
  lagDuration: {
    description:
      'Defines the offset of the series of pricing dates relative to the calculation period.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GcgyRFiq68rKDTw1wtJsfsUpu4hBukUsv29vavmPQmrZ',
    },
  },
  name: 'cdm/product/common/schedule/Lag',
};

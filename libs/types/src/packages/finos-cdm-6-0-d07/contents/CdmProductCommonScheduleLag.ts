export const CdmProductCommonScheduleLag = {
  description:
    'The pricing period per calculation period if the pricing days do not wholly fall within the respective calculation period.\n',
  firstObservationDateOffset: {
    description:
      'Defines the offset of the series of pricing dates relative to the calculation period.',
    type: {
      blueId: '5pnk9bH1JJq67GAcpXYjFhhREvjUoveKHs98CBqt9pEq',
    },
  },
  lagDuration: {
    description:
      'Defines the offset of the series of pricing dates relative to the calculation period.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5pnk9bH1JJq67GAcpXYjFhhREvjUoveKHs98CBqt9pEq',
    },
  },
  name: 'cdm/product/common/schedule/Lag',
} as const;

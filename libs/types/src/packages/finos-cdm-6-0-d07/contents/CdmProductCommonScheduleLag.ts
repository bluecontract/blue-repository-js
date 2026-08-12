export const CdmProductCommonScheduleLag: Record<string, unknown> = {
  description:
    'The pricing period per calculation period if the pricing days do not wholly fall within the respective calculation period.\n',
  firstObservationDateOffset: {
    description:
      'Defines the offset of the series of pricing dates relative to the calculation period.',
    type: {
      blueId: 'GWTMGPw1zgQW3M9NUS6RxNtce5jWU9defVNkm7sV6b8L',
    },
  },
  lagDuration: {
    description:
      'Defines the offset of the series of pricing dates relative to the calculation period.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GWTMGPw1zgQW3M9NUS6RxNtce5jWU9defVNkm7sV6b8L',
    },
  },
  name: 'cdm/product/common/schedule/Lag',
};

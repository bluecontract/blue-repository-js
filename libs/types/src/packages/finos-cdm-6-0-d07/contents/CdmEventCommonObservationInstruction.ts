export const CdmEventCommonObservationInstruction = {
  description: 'Specifies inputs needed to process an observation.',
  name: 'cdm/event/common/ObservationInstruction',
  observationEvent: {
    description: 'Contains all information related to an observation.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4E5yCo7XYTiKuuHHwr5uzwASRLaQSQREJNNpmiGAGT3N',
    },
  },
} as const;

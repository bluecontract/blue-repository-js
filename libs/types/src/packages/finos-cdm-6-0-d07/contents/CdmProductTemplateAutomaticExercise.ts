export const CdmProductTemplateAutomaticExercise: Record<string, unknown> = {
  description:
    'A type to define automatic exercise of a swaption. With automatic exercise the option is deemed to have exercised if it is in the money by more than the threshold amount on the exercise date.\n',
  isApplicable: {
    description: 'Boolean that indicates if it has an automaticExercise',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/product/template/AutomaticExercise',
  thresholdRate: {
    description:
      'A threshold rate. The threshold of 0.10% would be represented as 0.001',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};

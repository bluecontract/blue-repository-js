export const CdmProductTemplateAutomaticExercise = {
  description:
    'A type to define automatic exercise of a swaption. With automatic exercise the option is deemed to have exercised if it is in the money by more than the threshold amount on the exercise date.\n',
  isApplicable: {
    description: 'Boolean that indicates if it has an automaticExercise',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/product/template/AutomaticExercise',
  thresholdRate: {
    description:
      'A threshold rate. The threshold of 0.10% would be represented as 0.001',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;

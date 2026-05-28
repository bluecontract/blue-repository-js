export const CdmProductTemplateEarlyTerminationProvision = {
  description:
    'A data defining:  an early termination provision for a swap. This early termination is at fair value, i.e. on termination the fair value of the product must be settled between the parties.\n',
  mandatoryEarlyTermination: {
    description:
      'A mandatory early termination provision to terminate the swap at fair value.',
    type: {
      blueId: '3Wj1feGDTKdrryudkfw1ks2dViWQTUZT7ef7RbJ2a2w9',
    },
  },
  mandatoryEarlyTerminationDateTenor: {
    description:
      'Period after trade date of the mandatory early termination date.',
    type: {
      blueId: '5rdYwkwGdndCoYmQi9MNzw9SKQZsr68igDgyYFgvNzmh',
    },
  },
  name: 'cdm/product/template/EarlyTerminationProvision',
  optionalEarlyTermination: {
    description:
      'An option for either or both parties to terminate the swap at fair value.',
    type: {
      blueId: '6r9HC6aEvzHgbMXoGSQrFYX4t5gd7479xixcJs4h3ot1',
    },
  },
  optionalEarlyTerminationParameters: {
    description:
      'Definition of the first early termination date and the frequency of the termination dates subsequent to that. American exercise is defined by having a frequency of one day.\n',
    type: {
      blueId: 'FKfCuPahjxDovRJtwwh6TYBHD86Z1mi3jBbEP6dW91gZ',
    },
  },
} as const;

export const CdmProductTemplateEarlyTerminationProvision: Record<
  string,
  unknown
> = {
  description:
    'A data defining:  an early termination provision for a swap. This early termination is at fair value, i.e. on termination the fair value of the product must be settled between the parties.\n',
  mandatoryEarlyTermination: {
    description:
      'A mandatory early termination provision to terminate the swap at fair value.',
    type: {
      blueId: 'BV6rxiJFw1LMjpogdxDcwRjeUuJHDcR1ngiTtfUrN68U',
    },
  },
  mandatoryEarlyTerminationDateTenor: {
    description:
      'Period after trade date of the mandatory early termination date.',
    type: {
      blueId: '2eRPMxKZ8upfUGCDqNY6xXko7GTGvozudp1i9wznQmXL',
    },
  },
  name: 'cdm/product/template/EarlyTerminationProvision',
  optionalEarlyTermination: {
    description:
      'An option for either or both parties to terminate the swap at fair value.',
    type: {
      blueId: '6C7tBK3FPYoExviSwCvn8xbhCtRb4ZzoCViwrkrmXHDm',
    },
  },
  optionalEarlyTerminationParameters: {
    description:
      'Definition of the first early termination date and the frequency of the termination dates subsequent to that. American exercise is defined by having a frequency of one day.\n',
    type: {
      blueId: '5a1f8zsBnaT6JRJuJ3mwNA5EhwnrySGAijHK6TyE8NLv',
    },
  },
};

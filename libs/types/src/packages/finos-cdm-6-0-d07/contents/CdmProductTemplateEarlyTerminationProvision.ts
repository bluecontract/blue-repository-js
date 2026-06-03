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
      blueId: 'C6BHM5uzagsmiKxWqshqYj8ZhE13jTZuXKcAaJG5Lbsh',
    },
  },
  mandatoryEarlyTerminationDateTenor: {
    description:
      'Period after trade date of the mandatory early termination date.',
    type: {
      blueId: 'G5BwzTWEaA14NoPKn8iSwCnmwnWuQegPHZwrpgagS6kY',
    },
  },
  name: 'cdm/product/template/EarlyTerminationProvision',
  optionalEarlyTermination: {
    description:
      'An option for either or both parties to terminate the swap at fair value.',
    type: {
      blueId: '9qZESRoTw3JVrvChnNta2oj5TcTb7RV9ijcSRtnuCQvs',
    },
  },
  optionalEarlyTerminationParameters: {
    description:
      'Definition of the first early termination date and the frequency of the termination dates subsequent to that. American exercise is defined by having a frequency of one day.\n',
    type: {
      blueId: 'HUVjH3KGpFwoVaPyrgN35iMi95ckgPM1rjoMfUvcfmNe',
    },
  },
};

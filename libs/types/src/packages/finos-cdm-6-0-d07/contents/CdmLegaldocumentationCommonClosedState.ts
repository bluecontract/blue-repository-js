export const CdmLegaldocumentationCommonClosedState: Record<string, unknown> = {
  activityDate: {
    description:
      'The activity date on which the closing state took place, i.e. either the event date of the closing event (e.g. option exercise, contract early termination) or the contractual termination date.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'A class to qualify the closed state of an execution or a contract through the combination or a state (e.g. terminated, novated) and a set of dates: activity date, effective date and, when relevant, last payment date.\n',
  effectiveDate: {
    description:
      'The date on which the closing event contractually takes effect, when different from the activity date. When an explicit event effective date attribute is associated with the closing event, it will be that date. In the case of a cancellation event, it will be the date on which the cancelled event took place.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  lastPaymentDate: {
    description:
      'The date associated with the last payment in relation to the artefact (e.g. contract) to which this closed state applies. As an example, in the case of an early termination event, it would be the settlement date of the associated fee, if applicable.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/legaldocumentation/common/ClosedState',
  state: {
    description:
      'The qualification of what gave way to the contract or execution closure, e.g. allocation, termination, ...',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Ej15A6QYaEe5eF2iMzop6CYV6MmMRd15DeZz5n9SNtqn',
    },
  },
};

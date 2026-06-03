export const CdmObservableEventGracePeriodExtension: Record<string, unknown> = {
  applicable: {
    description:
      'Indicates whether the grace period extension provision is applicable.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  gracePeriod: {
    description:
      'The number of calendar or business days after any due date that the reference entity has to fulfil its obligations before a failure to pay credit event is deemed to have occurred. ISDA 2003 Term: Grace Period.\n',
    type: {
      blueId: 'GcgyRFiq68rKDTw1wtJsfsUpu4hBukUsv29vavmPQmrZ',
    },
  },
  name: 'cdm/observable/event/GracePeriodExtension',
};

export const CdmObservableEventGracePeriodExtension = {
  applicable: {
    description:
      'Indicates whether the grace period extension provision is applicable.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  gracePeriod: {
    description:
      'The number of calendar or business days after any due date that the reference entity has to fulfil its obligations before a failure to pay credit event is deemed to have occurred. ISDA 2003 Term: Grace Period.\n',
    type: {
      blueId: '5pnk9bH1JJq67GAcpXYjFhhREvjUoveKHs98CBqt9pEq',
    },
  },
  name: 'cdm/observable/event/GracePeriodExtension',
} as const;

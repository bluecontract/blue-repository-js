export const CdmObservableEventFailureToPay = {
  applicable: {
    description:
      'Indicates whether the failure to pay provision is applicable.',
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
  gracePeriodExtension: {
    description:
      'If this element is specified, indicates whether or not a grace period extension is applicable. ISDA 2003 Term: Grace Period Extension Applicable.\n',
    type: {
      blueId: '5JU838ptsuP3xhN8DLcMeENsfzy6eK4qD4QJETiXAH5h',
    },
  },
  name: 'cdm/observable/event/FailureToPay',
  paymentRequirement: {
    description:
      'Specifies a threshold for the failure to pay credit event. Market standard is USD 1,000,000 (JPY 100,000,000 for Japanese Yen trades) or its equivalent in the relevant obligation currency. This is applied on an aggregate basis across all Obligations of the Reference Entity. Intended to prevent technical/operational errors from triggering credit events. ISDA 2003 Term: Payment Requirement\n',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
} as const;

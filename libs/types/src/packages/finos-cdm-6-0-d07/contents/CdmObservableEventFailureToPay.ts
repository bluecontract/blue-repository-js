export const CdmObservableEventFailureToPay: Record<string, unknown> = {
  applicable: {
    description:
      'Indicates whether the failure to pay provision is applicable.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  gracePeriodExtension: {
    description:
      'If this element is specified, indicates whether or not a grace period extension is applicable. ISDA 2003 Term: Grace Period Extension Applicable.\n',
    type: {
      blueId: 'BTysZP1WpL4z9tsQazV1uF7AmmG5ZiX4Q8ABMpMSnfCW',
    },
  },
  name: 'cdm/observable/event/FailureToPay',
  paymentRequirement: {
    description:
      'Specifies a threshold for the failure to pay credit event. Market standard is USD 1,000,000 (JPY 100,000,000 for Japanese Yen trades) or its equivalent in the relevant obligation currency. This is applied on an aggregate basis across all Obligations of the Reference Entity. Intended to prevent technical/operational errors from triggering credit events. ISDA 2003 Term: Payment Requirement\n',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
};

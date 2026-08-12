export const CdmObservableEventRestructuring: Record<string, unknown> = {
  applicable: {
    description: 'Indicates whether the restructuring provision is applicable.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  multipleCreditEventNotices: {
    description:
      "Presence of this element and value set to 'true' indicates that Section 3.9 of the 2003 Credit Derivatives Definitions shall apply. Absence of this element indicates that Section 3.9 shall not apply. NOTE: Not allowed under ISDA Credit 1999.\n",
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  multipleHolderObligation: {
    description:
      'In relation to a restructuring credit event, unless multiple holder obligation is not specified restructurings are limited to multiple holder obligations. A multiple holder obligation means an obligation that is held by more than three holders that are not affiliates of each other and where at least two thirds of the holders must agree to the event that constitutes the restructuring credit event. ISDA 2003 Term: Multiple Holder Obligation.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/observable/event/Restructuring',
  restructuringType: {
    description: 'Specifies the type of restructuring that is applicable.',
    type: {
      blueId: 'LZSk27kzemAmjXyZjWpvsokiL5oP2wCXZ937ZUYTfkq',
    },
  },
};

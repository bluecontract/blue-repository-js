export const CdmEventCommonClearingInstruction: Record<string, unknown> = {
  alphaContract: {
    description:
      'The contract that will be submitted to the clearing house for clearing. The contract should indicate that it should be cleared by assigning a clearing organisation as a party role.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HxxzM9rdFcBDqPQ5HzDD9UxLqocN3L7WNYNZvEdpnWJd',
    },
  },
  clearerParty1: {
    description:
      'Optional party facing the CCP, acting as clearing member for party1.',
    type: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
    },
  },
  clearerParty2: {
    description:
      'Optional party facing the CCP, acting as clearing member for party2.',
    type: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
    },
  },
  clearingParty: {
    description:
      'The Central Counter party (CCP) that the contract will be submitted to for clearing.',
    schema: {
      required: true,
    },
    type: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
    },
  },
  description:
    'All information required to perform the clear life cycle event; the clearing party (CCP), the two parties facing each other on the alpha contract, and optionally the parties acting as clearing members.\n',
  isOpenOffer: {
    description: 'Open Offer',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/event/common/ClearingInstruction',
  party1: {
    description:
      'First party facing the CCP if it is clearing for its own account.',
    schema: {
      required: true,
    },
    type: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
    },
  },
  party2: {
    description:
      'Second party facing the CCP if it is clearing for its own account.',
    schema: {
      required: true,
    },
    type: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
    },
  },
};

export const CdmEventCommonClearingInstruction = {
  alphaContract: {
    description:
      'The contract that will be submitted to the clearing house for clearing. The contract should indicate that it should be cleared by assigning a clearing organisation as a party role.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'J8SrPWrtbe4J2GJXdDo51yKLW7GpaZmwrtGnvLKFRArQ',
    },
  },
  clearerParty1: {
    description:
      'Optional party facing the CCP, acting as clearing member for party1.',
    type: {
      blueId: '694bqGLce4g9XrBubcFXs81gNNsvVTGK3msPSdNsj5jD',
    },
  },
  clearerParty2: {
    description:
      'Optional party facing the CCP, acting as clearing member for party2.',
    type: {
      blueId: '694bqGLce4g9XrBubcFXs81gNNsvVTGK3msPSdNsj5jD',
    },
  },
  clearingParty: {
    description:
      'The Central Counter party (CCP) that the contract will be submitted to for clearing.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '694bqGLce4g9XrBubcFXs81gNNsvVTGK3msPSdNsj5jD',
    },
  },
  description:
    'All information required to perform the clear life cycle event; the clearing party (CCP), the two parties facing each other on the alpha contract, and optionally the parties acting as clearing members.\n',
  isOpenOffer: {
    description: 'Open Offer',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/event/common/ClearingInstruction',
  party1: {
    description:
      'First party facing the CCP if it is clearing for its own account.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '694bqGLce4g9XrBubcFXs81gNNsvVTGK3msPSdNsj5jD',
    },
  },
  party2: {
    description:
      'Second party facing the CCP if it is clearing for its own account.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '694bqGLce4g9XrBubcFXs81gNNsvVTGK3msPSdNsj5jD',
    },
  },
} as const;

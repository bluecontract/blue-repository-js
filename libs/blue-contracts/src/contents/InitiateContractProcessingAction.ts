export const initiateContractProcessingAction = {
  name: 'Initiate Contract Processing Action',
  description:
    "An action published by a party (typically a validator or processor) indicating their willingness to process the initiated \ncontract and maintain its state. This action serves as a commitment to validate and update the contract's state \nbased on subsequent events.\n",
  initiateContractEntry: {
    description:
      'The original Initiate Contract Action timeline entry. This links the processing action to the specific contract initiation.',
    type: {
      blueId: '5BDj3UbH6nUPh6bUQ9vfEchjV2vGLMwhd1FJ5UYaRcos',
    },
  },
  contract: {
    description: 'The initial state of the contract being processed.',
    type: {
      blueId: '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE',
    },
  },
} as const;

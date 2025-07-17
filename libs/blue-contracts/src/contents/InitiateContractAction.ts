export const initiateContractAction = {
  name: 'Initiate Contract Action',
  description:
    "This action serves as an announcement of the participant's intent to start a new contract instance.",
  contract: {
    description: 'The contract instance which is being initiated.',
    type: {
      blueId: '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE',
    },
  },
} as const;

export const ParticipantPurpose: Record<string, unknown> = {
  description:
    'Participant-visible declaration of why an actor is present in a document and which activities it intends to perform. Purpose is explanatory state, not authority, and must never replace mandate verification.\n',
  name: 'Participant Purpose',
  participant: {
    description: 'Participant whose purpose is described.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GnMntk3hLvHEsZTBE8Gk7ytPBexj6jhBJHdaxnJYhEQ7',
    },
  },
  statements: {
    description: 'Ordered purpose statements declared by the participant.',
    itemType: {
      blueId: 'FvGHnQXb72zffTbufdY8DSK1DWqtTGavSfHDcoeCLB7Y',
    },
    schema: {
      required: true,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};

export const ParticipantActivationState: Record<string, unknown> = {
  accountStatus: {
    description:
      "Participant's MyOS account status from bootstrap events (Active | Inactive | Failed)",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description: 'Tracks participant account status and activation',
  errorMessage: {
    description: 'Error message if participant activation failed',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Participant Activation State',
};

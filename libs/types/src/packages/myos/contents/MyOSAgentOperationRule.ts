export const MyOSAgentOperationRule: Record<string, unknown> = {
  description:
    'Owner-readable instruction used by the constrained MyOS intelligent evaluator for one candidate action.',
  id: {
    description:
      'Stable unique rule identifier within this exact mandate state.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'MyOS Agent Operation Rule',
  text: {
    description:
      'Owner-readable instruction evaluated for each candidate action.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};

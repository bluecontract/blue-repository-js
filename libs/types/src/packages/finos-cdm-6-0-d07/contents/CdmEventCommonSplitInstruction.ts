export const CdmEventCommonSplitInstruction = {
  breakdown: {
    description:
      'Each split breakdown specifies the set of primitive instructions to be applied to a single branch of that split. N split breakdowns result in N output trades, which include the original trade. Instructions for how to handle the original trade (e.g. if it must be closed) must be specified in one of the breakdowns.\n',
    itemType: {
      blueId: 'this#2',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    'Specifies instructions for a split, consisting of a breakdown of instructions to be applied to each branch of the split. This instruction can be used to duplicate a trade, as in a clearing scenario, or to split a trade into smaller quantities (in which case each breakdown instruction needs to include a quantity change), as in an allocation.\n',
  name: 'cdm/event/common/SplitInstruction',
} as const;

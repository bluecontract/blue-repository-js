export const CdmEventCommonContractFormationInstruction = {
  description:
    'Specifies instructions to create a fully formed contract, with optional legal agreements.',
  legalAgreement: {
    description:
      'Optional legal agreements associated to the contract being formed, for instance a master agreement.',
    itemType: {
      blueId: 'wvWoY9SJeRuG4p44dmwhpRcK5q7gCLULWqjwhDHDWbM#0',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  name: 'cdm/event/common/ContractFormationInstruction',
} as const;

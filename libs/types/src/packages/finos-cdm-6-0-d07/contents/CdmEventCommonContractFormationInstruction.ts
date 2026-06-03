export const CdmEventCommonContractFormationInstruction: Record<
  string,
  unknown
> = {
  description:
    'Specifies instructions to create a fully formed contract, with optional legal agreements.',
  legalAgreement: {
    description:
      'Optional legal agreements associated to the contract being formed, for instance a master agreement.',
    itemType: {
      blueId: '9LAToUm7ugSfrCZWL6KmTwi7jAEoXH8TcNNGxr34YvFc#0',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'cdm/event/common/ContractFormationInstruction',
};

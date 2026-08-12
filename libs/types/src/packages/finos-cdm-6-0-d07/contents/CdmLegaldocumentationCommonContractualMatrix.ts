export const CdmLegaldocumentationCommonContractualMatrix: Record<
  string,
  unknown
> = {
  matrixTerm: {
    description:
      'Defines any applicable key into the relevant matrix. For example, the Transaction Type would be the single term required for the Credit Derivatives Physical Settlement Matrix. This element should be omitted in the case of the 2000 ISDA Definitions Settlement Matrix for Early Termination and Swaptions.\n',
    type: {
      blueId: 'FR8okQFuj9QRiU5oLdBBP1oYWS4JxJRRAWKRsmVqRbmN',
    },
  },
  matrixType: {
    description: 'Identifies the form of applicable matrix.',
    schema: {
      required: true,
    },
    type: {
      blueId: '6xwzNwZ6SNNkzDZQEpHLCpbLX8mbUEmxosoBjAPtt1VD',
    },
  },
  name: 'cdm/legaldocumentation/common/ContractualMatrix',
};

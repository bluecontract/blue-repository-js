export const CdmLegaldocumentationCommonContractualMatrix: Record<
  string,
  unknown
> = {
  matrixTerm: {
    description:
      'Defines any applicable key into the relevant matrix. For example, the Transaction Type would be the single term required for the Credit Derivatives Physical Settlement Matrix. This element should be omitted in the case of the 2000 ISDA Definitions Settlement Matrix for Early Termination and Swaptions.\n',
    type: {
      blueId: 'Eyc8B8F3y2KnRoznB2hdpowXLuoWSHAkCnr3veTzM2Lc',
    },
  },
  matrixType: {
    description: 'Identifies the form of applicable matrix.',
    schema: {
      required: true,
    },
    type: {
      blueId: '27svQFwe6bB27frVyJ6e6Nx85ok2AeWiaJyYCwEwdVF4',
    },
  },
  name: 'cdm/legaldocumentation/common/ContractualMatrix',
};

export const CdmLegaldocumentationCommonContractualMatrix = {
  matrixTerm: {
    description:
      'Defines any applicable key into the relevant matrix. For example, the Transaction Type would be the single term required for the Credit Derivatives Physical Settlement Matrix. This element should be omitted in the case of the 2000 ISDA Definitions Settlement Matrix for Early Termination and Swaptions.\n',
    type: {
      blueId: '4FF87GVL4rfENXZ1E4J9DU3xpkfVLVGmfJySWqeorhS5',
    },
  },
  matrixType: {
    description: 'Identifies the form of applicable matrix.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'FpHDJapzgLvakFXFV8ZtQe1CcZ7aBKpmPLKLwWkp2tRd',
    },
  },
  name: 'cdm/legaldocumentation/common/ContractualMatrix',
} as const;

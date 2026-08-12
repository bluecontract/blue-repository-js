export const CdmProductTemplateConstituentWeight: Record<string, unknown> = {
  basketPercentage: {
    description:
      'The relative weight of each respective basket constituent, expressed in percentage. A basket percentage of 5% would be represented as 0.05.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  description:
    'A class describing the weight of each of the underlier constituent within the basket, either in absolute or relative terms.\n',
  name: 'cdm/product/template/ConstituentWeight',
  openUnits: {
    description:
      'The number of units (index or securities) that constitute the underlier of the swap. In the case of a basket swap, this element is used to reference both the number of basket units, and the number of each asset components of the basket when these are expressed in absolute terms.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};

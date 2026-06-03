export const CdmObservableAssetPriceComposite: Record<string, unknown> = {
  arithmeticOperator: {
    description: 'Specifies the arithmetic operator via an enumeration.',
    schema: {
      required: true,
    },
    type: {
      blueId: '8G8JMx9Qw4DFmuzKHtJVfUGbY57zaKc4EsT77wyLek9y',
    },
  },
  baseValue: {
    description:
      "The 1st value in the arithmetic operation, which may be non-commutative in some cases: Subtract, Divide). This 1st operand is called 'baseValue' as it refers to the price anchor in the arithmetic operation: e.g. the clean price (Bond) or the spot rate (FX).\n",
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  description:
    'Defines the inputs required to calculate a price as a simple composite of 2 other values. The inputs consist of 2 numbers and a simple arithmetic operator. This generic data type applies to a variety of use cases where a price is obtained by simple composition, e.g. dirty = clean + accrued (Bond), forward rate = spot rate + forward point (FX) etc.\n',
  name: 'cdm/observable/asset/PriceComposite',
  operand: {
    description:
      "The 2nd value in the arithmetic operation, which may be non-commutative in some cases: Subtract, Divide). The 2nd operand is called 'operand' to distinguish it from the 1st one which is the price anchor.\n",
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  operandType: {
    description:
      'Optionally qualifies the type of operand: e.g. accrued or forward point.\n',
    type: {
      blueId: 'AYFWVGAm6RijsVmJ8UzknPTSr57LT6zv3HLbBwiqWeQn',
    },
  },
};

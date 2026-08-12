export const CdmProductTemplatePartialExercise: Record<string, unknown> = {
  description:
    'A class defining partial exercise. As defined in the 2000 ISDA Definitions, Section 12.3 Partial Exercise, the buyer of the option may exercise all or less than all the notional amount of the underlying swap but may not be less than the minimum notional amount (if specified) and must be an integral multiple of the integral multiple amount if specified.\n',
  integralMultipleAmount: {
    description:
      'A notional amount which restricts the amount of notional that can be exercised when partial exercise or multiple exercise is applicable. The integral multiple amount defines a lower limit of notional that can be exercised and also defines a unit multiple of notional that can be exercised, i.e. only integer multiples of this amount can be exercised.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  minimumNotionalAmount: {
    description:
      'The minimum notional amount that can be exercised on a given exercise date. See multipleExercise.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  minimumNumberOfOptions: {
    description:
      'The minimum number of options that can be exercised on a given exercise date.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  name: 'cdm/product/template/PartialExercise',
  notionaReference: {
    description:
      'A pointer style reference to the associated notional schedule defined elsewhere in the document. This element has been made optional as part of its integration in the OptionBaseExtended, because not required for the options on securities.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'EP1r4ouVVbfJhEazX6iBArCJYk3u6aP7hwxJSGLBFbet',
    },
  },
};

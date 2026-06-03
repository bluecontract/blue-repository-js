export const CdmProductTemplateMultipleExercise: Record<string, unknown> = {
  description:
    'A class defining multiple exercises. As defined in the 2000 ISDA Definitions, Section 12.4. Multiple Exercise, the buyer of the option has the right to exercise all or less than all the unexercised notional amount of the underlying swap on one or more days in the exercise period, but on any such day may not exercise less than the minimum notional amount or more than the maximum notional amount, and if an integral multiple amount is specified, the notional exercised must be equal to or, be an integral multiple of, the integral multiple amount. In FpML, MultipleExercise is built upon the PartialExercise.model.\n',
  integralMultipleAmount: {
    description:
      'A notional amount which restricts the amount of notional that can be exercised when partial exercise or multiple exercise is applicable. The integral multiple amount defines a lower limit of notional that can be exercised and also defines a unit multiple of notional that can be exercised, i.e. only integer multiples of this amount can be exercised.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  maximumNotionalAmount: {
    description:
      'The maximum notional amount that can be exercised on a given exercise date.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  maximumNumberOfOptions: {
    description:
      'The maximum number of options that can be exercised on a given exercise date. If the number is not specified, it means that the maximum number of options corresponds to the remaining unexercised options.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
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
  name: 'cdm/product/template/MultipleExercise',
  notionaReference: {
    description:
      'A pointer style reference to the associated notional schedule defined elsewhere in the document. This element has been made optional as part of its integration in the OptionBaseExtended, because not required for the options on securities.\n',
    type: {
      blueId: 'EP1r4ouVVbfJhEazX6iBArCJYk3u6aP7hwxJSGLBFbet',
    },
  },
};

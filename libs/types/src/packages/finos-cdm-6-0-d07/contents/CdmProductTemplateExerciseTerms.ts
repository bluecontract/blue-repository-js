export const CdmProductTemplateExerciseTerms: Record<string, unknown> = {
  commencementDate: {
    description:
      'The first day of the exercise period for an American style option.',
    type: {
      blueId: '2Dr79mc7tDo84pCgLDhmSAuay1naC42UUovCTcaMjY5R',
    },
  },
  description:
    'A class defining the exercise period for an option together with any rules governing the notional amount of the underlying which can be exercised on any given exercise date and any associated exercise fees.\n',
  earliestExerciseTime: {
    description:
      "The earliest time at which notice of exercise can be given by the buyer to the seller (or seller's agent) to, and including, the expiration date.\n",
    type: {
      blueId: '4Mi73c2rJbGTBeaTVi4xUgW33QBxsUyxSSV6ELoqnP4j',
    },
  },
  exerciseDates: {
    description:
      'The dates that define the Bermuda option exercise dates and the expiration date. The last specified date is assumed to be the expiration date. The dates can either be specified as a series of explicit dates and associated adjustments or as a series of dates defined relative to another schedule of dates, for example, the calculation period start dates. Where a relative series of dates are defined the first and last possible exercise dates can be separately specified.\n',
    type: {
      blueId: 'AiYMNnHZT7DJNXi1wScVgJSGHkgj5i6eH6jUgQoxX9Bw',
    },
  },
  exerciseFee: {
    description:
      'A fee to be paid on exercise. This could be represented as an amount or a rate and notional reference on which to apply the rate.\n',
    type: {
      blueId: '287wM7CqpP1RTW7bu4j4pUa7QdEuXGE6E186mu2bhovh',
    },
  },
  exerciseFeeSchedule: {
    description:
      'The fees associated with an exercise date. The fees are conditional on the exercise occurring. The fees can be specified as actual currency amounts or as percentages of the notional amount being exercised.\n',
    type: {
      blueId: '5tK1F6AqKSKAHYjvgz5cGCNx6EQGZTimozK4y9mc1wWx',
    },
  },
  exerciseProcedure: {
    description:
      'The set of parameters defining the procedure associated with the exercise, e.g. manual exercise.',
    type: {
      blueId: 'G7wUufVEcg9HCHxDMWdxfs1AaqKxx29vqAa8aBEKkQ8Q',
    },
  },
  expirationDate: {
    description:
      'The last day within an exercise period for an American style option. For a European style option it is the only day within the exercise period.\n',
    itemType: {
      blueId: '2Dr79mc7tDo84pCgLDhmSAuay1naC42UUovCTcaMjY5R',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  expirationTime: {
    description:
      'The latest time for exercise on expirationDate. It is made mandatory given that for all option styles, this field is required.\n',
    type: {
      blueId: '4Mi73c2rJbGTBeaTVi4xUgW33QBxsUyxSSV6ELoqnP4j',
    },
  },
  expirationTimeType: {
    description:
      'The time of day at which the equity option expires, for example the official closing time of the exchange.',
    schema: {
      required: true,
    },
    type: {
      blueId: '2LeVjwPpBKrVtg3zHwoBYJoNvx1Hset4WEYcxiPcPMxA',
    },
  },
  latestExerciseTime: {
    description:
      "For a Bermuda or American style option, the latest time on an exercise business day (excluding the expiration date) within the exercise period that notice can be given by the buyer to the seller or seller's agent. Notice of exercise given after this time will be deemed to have been given on the next exercise business day.\n",
    type: {
      blueId: '4Mi73c2rJbGTBeaTVi4xUgW33QBxsUyxSSV6ELoqnP4j',
    },
  },
  multipleExercise: {
    description:
      'As defined in the 2000 ISDA Definitions, Section 12.4. Multiple Exercise, the buyer of the option has the right to exercise all or less than all the unexercised notional amount of the underlying swap on one or more days in the exercise period, but on any such day may not exercise less than the minimum notional amount or more that the maximum notional amount, and if an integral multiple amount is specified, the notional amount exercised must be equal to, or be an integral multiple of, the integral multiple amount.\n',
    type: {
      blueId: '8eLP8HxgpSvj1vyxDJXMhDpMcQU696aKo5Uvz1mt9Q1S',
    },
  },
  name: 'cdm/product/template/ExerciseTerms',
  partialExercise: {
    description:
      'As defined in the 2000 ISDA Definitions, Section 12.3. Partial Exercise, the buyer of the option has the right to exercise all or less than all the notional amount of the underlying swap on the expiration date, but may not exercise less than the minimum notional amount, and if an integral multiple amount is specified, the notional amount exercised must be equal to, or be an integral multiple of, the integral multiple amount.\n',
    type: {
      blueId: 'BpdSpKc8R5gAnDZQF7eJYbRNetxpvv1r1XSY9dh1LTaC',
    },
  },
  relevantUnderlyingDate: {
    description:
      "The effective date on the underlying product if the option is exercised.  For example, for a swaption it is the swap effective date, for an option on an FX spot or forward it is the value date for settlement, and in an extendible/cancelable provision it is the swap termination date, which is the date on which the termination is effective.'\n",
    type: {
      blueId: 'AiYMNnHZT7DJNXi1wScVgJSGHkgj5i6eH6jUgQoxX9Bw',
    },
  },
  style: {
    description:
      'Whether the option has a single exercise (european), multiple exercise dates (bermuda), or a continuous range of exercise (american).\n',
    type: {
      blueId: 'E7G8rbJWZbrsWYs4MwRaciyoqUH3qB2cKFMgynJ8Jide',
    },
  },
};

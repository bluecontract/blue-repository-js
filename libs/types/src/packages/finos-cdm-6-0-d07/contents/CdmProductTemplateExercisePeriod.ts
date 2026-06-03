export const CdmProductTemplateExercisePeriod: Record<string, unknown> = {
  description:
    'This defines the time interval to the start of the exercise period, i.e. the earliest exercise date, and the frequency of subsequent exercise dates (if any).\n',
  earliestExerciseDateTenor: {
    description:
      'The time interval to the first (and possibly only) exercise date in the exercise period.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'G5BwzTWEaA14NoPKn8iSwCnmwnWuQegPHZwrpgagS6kY',
    },
  },
  exerciseFrequency: {
    description:
      'The frequency of subsequent exercise dates in the exercise period following the earliest exercise date. An interval of 1 day should be used to indicate an American style exercise period.\n',
    type: {
      blueId: 'G5BwzTWEaA14NoPKn8iSwCnmwnWuQegPHZwrpgagS6kY',
    },
  },
  name: 'cdm/product/template/ExercisePeriod',
};

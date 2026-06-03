export const CdmBaseDatetimeFrequency: Record<string, unknown> = {
  description:
    'A class for defining a date frequency, e.g. one day, three months, through the combination of an integer value and a standardized period value that is specified as part of an enumeration.\n',
  name: 'cdm/base/datetime/Frequency',
  period: {
    description:
      'A time period, e.g. a day, week, month, year or term of the stream.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'BLwQ9sW7unThpYZC3TVs8YtMmiAoZ4NVGjVRppu4gm7x',
    },
  },
  periodMultiplier: {
    description:
      'A time period multiplier, e.g. 1, 2, or 3. If the period value is T (Term) then period multiplier must contain the value 1.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
};

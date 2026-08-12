export const CdmBaseDatetimePeriod: Record<string, unknown> = {
  description: 'A class to define recurring periods or time offsets.',
  name: 'cdm/base/datetime/Period',
  period: {
    description:
      'A time period, e.g. a day, week, month or year of the stream. If the periodMultiplier value is 0 (zero) then period must contain the value D (day).\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HfcnjKnwmrE8GwTjvmvtKtcYgCZHWwe9PpsaJ5Y38Y2F',
    },
  },
  periodMultiplier: {
    description:
      'A time period multiplier, e.g. 1, 2 or 3 etc. A negative value can be used when specifying an offset relative to another date, e.g. -2 days.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
};

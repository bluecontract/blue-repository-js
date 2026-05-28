export const CdmBaseDatetimePeriod = {
  description: 'A class to define recurring periods or time offsets.',
  name: 'cdm/base/datetime/Period',
  period: {
    description:
      'A time period, e.g. a day, week, month or year of the stream. If the periodMultiplier value is 0 (zero) then period must contain the value D (day).\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'AgkY1rP5TjBiYR6gsYzEm1vgFaYxyUc6Lt3pwuRsWx8F',
    },
  },
  periodMultiplier: {
    description:
      'A time period multiplier, e.g. 1, 2 or 3 etc. A negative value can be used when specifying an offset relative to another date, e.g. -2 days.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
} as const;

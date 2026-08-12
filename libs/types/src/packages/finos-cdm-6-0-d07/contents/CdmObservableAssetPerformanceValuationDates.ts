export const CdmObservableAssetPerformanceValuationDates: Record<
  string,
  unknown
> = {
  description:
    'Defines how and when a performance type option or performance type swap is to be valued.',
  determinationMethod: {
    description:
      'Specifies the method according to which an amount or a date is determined.',
    schema: {
      required: true,
    },
    type: {
      blueId: '5jqv11pA6a3Nrtm11SrFfbQvRZZ6ukyLt7PkNLq82wy1',
    },
  },
  name: 'cdm/observable/asset/PerformanceValuationDates',
  valuationDate: {
    description:
      '2018 ISDA CDM Equity Confirmation for Security Equity Swap: Pricing Date\n',
    type: {
      blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
    },
  },
  valuationDates: {
    description:
      '2018 ISDA CDM Equity Confirmation for Security Equity Swap: Pricing Date\n',
    type: {
      blueId: 'A5fbgqJ72K7pbNNCrmP9z1uJjRfJjx4z6Bav92ZY3iMs',
    },
  },
  valuationTime: {
    description:
      'The specific time of day at which the calculation agent values the underlying. The SpecificTime is the only case when the valuationTime (time + business center location  e.g. 10:00:00 USNY) should be provided. You should be able to provide just the valuationTime without valuationTimeType, which infer that this is a specific time.\n',
    type: {
      blueId: '4muK6BKTZZzEij2eR3Dg7sQxj224LzRoyzr5n7UcAR3X',
    },
  },
  valuationTimeType: {
    description:
      'The time of day at which the calculation agent values the underlying, for example the official closing time of the exchange.\n',
    type: {
      blueId: 'CPirifxyoZ3EheLcX6KW9muSEUsxpDaj7mJXu5zW6jsJ',
    },
  },
};

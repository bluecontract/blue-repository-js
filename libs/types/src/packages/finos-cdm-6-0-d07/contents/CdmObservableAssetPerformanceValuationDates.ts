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
      blueId: 'F2XKDuytcyrcyYVFazD7Tuqtk1J9p5rtwDxh9Y9PUUWH',
    },
  },
  name: 'cdm/observable/asset/PerformanceValuationDates',
  valuationDate: {
    description:
      '2018 ISDA CDM Equity Confirmation for Security Equity Swap: Pricing Date\n',
    type: {
      blueId: '2Dr79mc7tDo84pCgLDhmSAuay1naC42UUovCTcaMjY5R',
    },
  },
  valuationDates: {
    description:
      '2018 ISDA CDM Equity Confirmation for Security Equity Swap: Pricing Date\n',
    type: {
      blueId: '4EkR94oSN87arjWhzEQUZELGM8at9SvDoSZ3LKbE12sg',
    },
  },
  valuationTime: {
    description:
      'The specific time of day at which the calculation agent values the underlying. The SpecificTime is the only case when the valuationTime (time + business center location  e.g. 10:00:00 USNY) should be provided. You should be able to provide just the valuationTime without valuationTimeType, which infer that this is a specific time.\n',
    type: {
      blueId: '4Mi73c2rJbGTBeaTVi4xUgW33QBxsUyxSSV6ELoqnP4j',
    },
  },
  valuationTimeType: {
    description:
      'The time of day at which the calculation agent values the underlying, for example the official closing time of the exchange.\n',
    type: {
      blueId: '4h5N1XJhikomVgESoUQkDUs2Qfx1RK39JWGgd8HQXgEv',
    },
  },
};

export const CdmObservableAssetPerformanceValuationDates = {
  description:
    'Defines how and when a performance type option or performance type swap is to be valued.',
  determinationMethod: {
    description:
      'Specifies the method according to which an amount or a date is determined.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '3y75YW3Xvg26b63Etnyf7EmxBfhFMUEgAhimCGQ2jyab',
    },
  },
  name: 'cdm/observable/asset/PerformanceValuationDates',
  valuationDate: {
    description:
      '2018 ISDA CDM Equity Confirmation for Security Equity Swap: Pricing Date\n',
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
  valuationDates: {
    description:
      '2018 ISDA CDM Equity Confirmation for Security Equity Swap: Pricing Date\n',
    type: {
      blueId: 'Cpbn2utZQopvuh7pdxe4hrg9S6CvTTqwa6hLYZRihZRr',
    },
  },
  valuationTime: {
    description:
      'The specific time of day at which the calculation agent values the underlying. The SpecificTime is the only case when the valuationTime (time + business center location  e.g. 10:00:00 USNY) should be provided. You should be able to provide just the valuationTime without valuationTimeType, which infer that this is a specific time.\n',
    type: {
      blueId: 'AYcPv3zXSTKojz4MpYi8KWL5Z9TVBuzNzHmzsZe3cYcC',
    },
  },
  valuationTimeType: {
    description:
      'The time of day at which the calculation agent values the underlying, for example the official closing time of the exchange.\n',
    type: {
      blueId: '5SHUer2m9Wrjeo45qpWiGeBoKwQ2Z66Waz5zaTwYcJUp',
    },
  },
} as const;

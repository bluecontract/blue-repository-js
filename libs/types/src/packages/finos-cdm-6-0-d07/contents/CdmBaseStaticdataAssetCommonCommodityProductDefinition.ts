export const CdmBaseStaticdataAssetCommonCommodityProductDefinition = {
  commodityInfoPublisher: {
    description:
      'Specifies the publication where the commodity prices can be found.',
    type: {
      blueId: 'GpLEdBS7Wo3gH26kSqsDLo7RudnuHCXQQear34hMXeV7',
    },
  },
  description:
    'Specifies the commodity underlier in the event that no ISDA Commodity Reference Price exists.',
  exchangeId: {
    description:
      'Identifies the exchange from which the reference price should be sourced, using the scheme at the following url: http://www.fpml.org/coding-scheme/external/exchange-id-MIC-1-0\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  name: 'cdm/base/staticdata/asset/common/CommodityProductDefinition',
  priceSource: {
    description:
      'Specifies a publication that provides the commodity price, including, where applicable the details of where in the publication the price is published.  Applicable when the commodity reference price is not a futures contract\n',
    type: {
      blueId: '7iVrwmxYPhEys3U1gW5XuLq4fFt7XbEdv4H1TSLxucq6',
    },
  },
  referenceFramework: {
    description: 'Specifies the type of commodity.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '2LPZuZ9LPiKM2aCEuPCrJLd9Ui3gKomr2qL3fVuqDuMP',
    },
  },
} as const;

export const CdmBaseStaticdataAssetCommonCommodityProductDefinition: Record<
  string,
  unknown
> = {
  commodityInfoPublisher: {
    description:
      'Specifies the publication where the commodity prices can be found.',
    type: {
      blueId: '2U5utSJ8k2ZUUAhQ55aoZL8AB4QWHroS2oQQx7uBhvdk',
    },
  },
  description:
    'Specifies the commodity underlier in the event that no ISDA Commodity Reference Price exists.',
  exchangeId: {
    description:
      'Identifies the exchange from which the reference price should be sourced, using the scheme at the following url: http://www.fpml.org/coding-scheme/external/exchange-id-MIC-1-0\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  name: 'cdm/base/staticdata/asset/common/CommodityProductDefinition',
  priceSource: {
    description:
      'Specifies a publication that provides the commodity price, including, where applicable the details of where in the publication the price is published.  Applicable when the commodity reference price is not a futures contract\n',
    type: {
      blueId: 'HyV2GLWDgCxkJJ2KRpuvtTdGurQejk4MXEKSi2vu8aKN',
    },
  },
  referenceFramework: {
    description: 'Specifies the type of commodity.',
    schema: {
      required: true,
    },
    type: {
      blueId: '3Szwd2qmGpb984rriz5Yia1VSkVLPrvXGSTv9qhsFyQf',
    },
  },
};

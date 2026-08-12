export const CdmBaseStaticdataAssetCommonCommodityProductDefinition: Record<
  string,
  unknown
> = {
  commodityInfoPublisher: {
    description:
      'Specifies the publication where the commodity prices can be found.',
    type: {
      blueId: '4e4FSGJ6asiKeNv6j7PQBXz5HJEsr8DyqodHRGy2WSYj',
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
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  name: 'cdm/base/staticdata/asset/common/CommodityProductDefinition',
  priceSource: {
    description:
      'Specifies a publication that provides the commodity price, including, where applicable the details of where in the publication the price is published.  Applicable when the commodity reference price is not a futures contract\n',
    type: {
      blueId: '6ndw1qraVosKGtrHUyCSNZ4yHpydKg4aKVNdbEEZfoMd',
    },
  },
  referenceFramework: {
    description: 'Specifies the type of commodity.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AFMZa2hViXkmuEYd3tzHVx5sJAXHE2RH9Drcb1MV7xxa',
    },
  },
};

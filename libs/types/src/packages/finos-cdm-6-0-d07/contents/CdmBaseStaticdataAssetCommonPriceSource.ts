export const CdmBaseStaticdataAssetCommonPriceSource: Record<string, unknown> =
  {
    description:
      'Specifies a publication that provides the commodity price, including, where applicable, the details of where in the publication the price is published.\n',
    name: 'cdm/base/staticdata/asset/common/PriceSource',
    pricePublisher: {
      description:
        'Defines a publication in which the price can be found. (e.g Gas Daily, Platts Bloomberg. Commodity publishers can be found at this URL:  http://www.fpml.org/coding-scheme/commodity-information-provider>\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
      },
    },
    priceSourceHeading: {
      description:
        'Specifies the heading or field name for the price  on a given page or screen, where applicable.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    priceSourceLocation: {
      description:
        'Specifies the location of the price which may be a specific page, electornic screen name, or a code (e.g. a RIC code) where the price can be found.\n',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    priceSourceTime: {
      description: 'Specifies the time at which the price should be observed.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
  };

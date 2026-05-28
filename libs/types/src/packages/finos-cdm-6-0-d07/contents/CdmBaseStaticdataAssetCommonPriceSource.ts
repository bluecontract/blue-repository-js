export const CdmBaseStaticdataAssetCommonPriceSource = {
  description:
    'Specifies a publication that provides the commodity price, including, where applicable, the details of where in the publication the price is published.\n',
  name: 'cdm/base/staticdata/asset/common/PriceSource',
  pricePublisher: {
    description:
      'Defines a publication in which the price can be found. (e.g Gas Daily, Platts Bloomberg. Commodity publishers can be found at this URL:  http://www.fpml.org/coding-scheme/commodity-information-provider>\n',
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
  priceSourceHeading: {
    description:
      'Specifies the heading or field name for the price  on a given page or screen, where applicable.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  priceSourceLocation: {
    description:
      'Specifies the location of the price which may be a specific page, electornic screen name, or a code (e.g. a RIC code) where the price can be found.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  priceSourceTime: {
    description: 'Specifies the time at which the price should be observed.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;

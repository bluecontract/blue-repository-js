export const CdmBaseStaticdataAssetCommonProductIdentifier = {
  description:
    'Comprises an identifier and a source. The associated metadata key denotes the ability to associate a hash value to the ProductIdentifier instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.\n',
  identifier: {
    description:
      'Provides an identifier associated with a specific product.  The identifier is unique within the public source specified in the source attribute.\n',
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
  name: 'cdm/base/staticdata/asset/common/ProductIdentifier',
  source: {
    description: 'Defines the source of the identifier.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '8K6WNDwrEvM8ZWoTxdgirRUPiBgvFUgxXyuKj4jCxmKm',
    },
  },
} as const;

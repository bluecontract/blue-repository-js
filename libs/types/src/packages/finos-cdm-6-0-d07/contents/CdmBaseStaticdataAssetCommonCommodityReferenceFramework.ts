export const CdmBaseStaticdataAssetCommonCommodityReferenceFramework = {
  capacityUnit: {
    description:
      'Provides an enumerated value for a capacity unit, generally used in the context of defining quantities for commodities.\n',
    type: {
      blueId: 'ANaFxPMcbPKw8USLSD7mcUeT9DBz5q9BkYYt9GMjvDMz',
    },
  },
  commodityName: {
    description:
      'Identifies the commodity more specifically. Where possible, this should follow the naming convention used in the 2005 ISDA Commodity Definitions SubAnnex A, including the subCommodity and additional qualifiers, but should be limited to 256 characters or less.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  currency: {
    description: 'Defines the currency in which the commodity is priced.',
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
  description: 'Specifies the type of commodity.',
  name: 'cdm/base/staticdata/asset/common/CommodityReferenceFramework',
  weatherUnit: {
    description:
      'Provides an enumerated values for a weather unit, generally used in the context of defining quantities for commodities.\n',
    type: {
      blueId: 'aUWGFpq6gwDP6zaku6dz6bnhGWzX5a3YSgTLJzSqXiL',
    },
  },
} as const;

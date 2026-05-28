export const CdmBaseStaticdataAssetCommonAssetIdentifier = {
  description:
    'The unique identifier for an Asset, specified using an Asset Identifier Type enumerator.',
  identifier: {
    description: 'The identifier value.',
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
  identifierType: {
    description:
      'Defines the symbology source of the Asset Identifier, eg CUSIP, ISIN, etc.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '3TWoeGYJX3t5xD73ccA1wDeoWbGqpwVhJ4qVR2p4v3Gs',
    },
  },
  name: 'cdm/base/staticdata/asset/common/AssetIdentifier',
} as const;

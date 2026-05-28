export const CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerType = {
  description:
    'Represents a class to allow specification of different type of Regional government collateral.',
  name: 'cdm/base/staticdata/asset/common/RegionalGovernmentIssuerType',
  sovereignRecourse: {
    description:
      'Applies to regional governments, local authorities or municipals.  True if entity has recourse to sovereign (e.g. debt guaranteed by government).  False if entity does not have recourse to sovereign.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
} as const;

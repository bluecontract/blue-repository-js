export const CdmProductAssetEquityUnderlierProvisions = {
  componentSecurityIndexAnnexFallback: {
    description:
      'For an index option or swap transaction, a flag to indicate whether a relevant Component Security Index Annex is applicable to the transaction.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  localJurisdiction: {
    description:
      'The ISO 3166 standard code for the country within which the postal address is located.',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  multipleExchangeIndexAnnexFallback: {
    description:
      'For an index option or swap transaction, a flag to indicate whether a relevant Multiple Exchange Index Annex is applicable to the transaction. This annex defines additional provisions which are applicable where an index is comprised of component securities that are traded on multiple exchanges.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/product/asset/EquityUnderlierProvisions',
  relevantJurisdiction: {
    description:
      'The ISO 3166 standard code for the country within which the postal address is located.',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
} as const;

export const CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerType: Record<
  string,
  unknown
> = {
  description:
    'Represents a class to allow specification of different types of Quasi Government collateral.',
  name: 'cdm/base/staticdata/asset/common/QuasiGovernmentIssuerType',
  sovereignEntity: {
    description:
      'True if sovereign entity (e.g. not separate legal personality from sovereign) or false if non-sovereign entity (e.g. separate legal personality from sovereign).\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  sovereignRecourse: {
    description:
      'Applies to non-sovereign entity (e.g. separate legal personality from sovereign).  True if entity has recourse to sovereign (e.g. debt guaranteed by government).  False if entity does not have recourse to sovereign.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
};

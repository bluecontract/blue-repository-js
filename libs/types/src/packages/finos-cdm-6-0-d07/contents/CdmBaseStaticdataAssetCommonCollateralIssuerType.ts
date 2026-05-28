export const CdmBaseStaticdataAssetCommonCollateralIssuerType = {
  description:
    'Represents a class to allow specification of the type of entity issuing the collateral.',
  issuerType: {
    description: 'Specifies the origin of entity issuing the collateral.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'GsGAdnX5acwQtmYsn3WQTMmsvfnjFYsndL1pHPqocW1s',
    },
  },
  name: 'cdm/base/staticdata/asset/common/CollateralIssuerType',
  quasiGovernmentType: {
    description:
      'Specifies debt issues by institutions or bodies, typically constituted by statute, with a function mandated by the government and subject to government supervision inclusive of profit- and non-profit making bodies. Includes the US Agencies and GSEs and the EU concept of public sector entities. Excluding any entities which are also Regional Government.\n',
    type: {
      blueId: '9SwjQNQUerVoGrpV9dTTUrUcN92HvFBECzoBUN3J9pjJ',
    },
  },
  regionalGovernmentType: {
    description: 'Specifies Regional government, local authority or municipal.',
    type: {
      blueId: 'EfNf2MwwCBqn8fqvmXa6jpnxUBnNyuLoB2day7wtu4mk',
    },
  },
  specialPurposeVehicleType: {
    description:
      'Specifies a subsidiary company that is formed to undertake a specific business purpose of acquisition and financing of specific assets on a potentially limited recourse basis dependent of how it is designed. E.g. asset backed securities, including securitisations.\n',
    type: {
      blueId: 'FFRnQiL3bCrcgQFbQM9Gf4yzfqkiSnx9SMqfCAdxckut',
    },
  },
  supraNationalType: {
    description:
      'Specifies debt issued by international organisations and multilateral banks.',
    type: {
      blueId: 'CMj4N8cXj9KS7aPG8P3F4vssfTBZeLnDFZmyyy71gWdu',
    },
  },
} as const;

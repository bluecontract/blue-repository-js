export const CdmBaseStaticdataAssetCommonCollateralIssuerType: Record<
  string,
  unknown
> = {
  description:
    'Represents a class to allow specification of the type of entity issuing the collateral.',
  issuerType: {
    description: 'Specifies the origin of entity issuing the collateral.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'EK6fu2Rrbrhva6gTHnTiDRDC2CYZESN7KREx5HCcRqP',
    },
  },
  name: 'cdm/base/staticdata/asset/common/CollateralIssuerType',
  quasiGovernmentType: {
    description:
      'Specifies debt issues by institutions or bodies, typically constituted by statute, with a function mandated by the government and subject to government supervision inclusive of profit- and non-profit making bodies. Includes the US Agencies and GSEs and the EU concept of public sector entities. Excluding any entities which are also Regional Government.\n',
    type: {
      blueId: '9m8CYJDTZHcV56FCNhnhqfrt3YNP7NHcQ5zYfuXUm9Yu',
    },
  },
  regionalGovernmentType: {
    description: 'Specifies Regional government, local authority or municipal.',
    type: {
      blueId: '8Hy8aJbbNdada5rvv2j1DRU4Ejtk1PdC6pEejkJ6D8kF',
    },
  },
  specialPurposeVehicleType: {
    description:
      'Specifies a subsidiary company that is formed to undertake a specific business purpose of acquisition and financing of specific assets on a potentially limited recourse basis dependent of how it is designed. E.g. asset backed securities, including securitisations.\n',
    type: {
      blueId: 'AeyCCHQJ9iUm1oez85sYSUiHbzdzodJZpU9ZNNhcqiFi',
    },
  },
  supraNationalType: {
    description:
      'Specifies debt issued by international organisations and multilateral banks.',
    type: {
      blueId: '5ZQJRbHs1sigSChqUCynDn3BTCeQbqJaiLpXEKJRp3w',
    },
  },
};

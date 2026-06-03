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
      blueId: '5Vqz5iZWg2FYRz1e6qJVm5q3vRS2ML19JPjvEpZ4bYtu',
    },
  },
  name: 'cdm/base/staticdata/asset/common/CollateralIssuerType',
  quasiGovernmentType: {
    description:
      'Specifies debt issues by institutions or bodies, typically constituted by statute, with a function mandated by the government and subject to government supervision inclusive of profit- and non-profit making bodies. Includes the US Agencies and GSEs and the EU concept of public sector entities. Excluding any entities which are also Regional Government.\n',
    type: {
      blueId: 'GKXmRwDfJrtMQq78SdC8CuCaCqc3Fq99jNHShLFH3CFi',
    },
  },
  regionalGovernmentType: {
    description: 'Specifies Regional government, local authority or municipal.',
    type: {
      blueId: 'HLEkFY88ouS3waVvxxHJE5z23k1PYJGizdrHbYYg1rGp',
    },
  },
  specialPurposeVehicleType: {
    description:
      'Specifies a subsidiary company that is formed to undertake a specific business purpose of acquisition and financing of specific assets on a potentially limited recourse basis dependent of how it is designed. E.g. asset backed securities, including securitisations.\n',
    type: {
      blueId: '5qsyiVpwMMJ634uApJQwMnZmrry7x6MHoaMJeGxdb5Bq',
    },
  },
  supraNationalType: {
    description:
      'Specifies debt issued by international organisations and multilateral banks.',
    type: {
      blueId: 'DntsTXHGwUWVz7qTBeVzcb1XUkrUGTNzhHREc9jpBLF7',
    },
  },
};

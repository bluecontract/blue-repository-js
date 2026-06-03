export const CdmProductTemplateAssetLeg: Record<string, unknown> = {
  deliveryMethod: {
    description: 'Specifies a delivery method for the security transaction.',
    schema: {
      required: true,
    },
    type: {
      blueId: '6LWhigVjjAUUSFhmA6HbeNXAPPtSPD97nTeiyR7yRQCn',
    },
  },
  description: 'Defines each asset movement of an asset payout.',
  name: 'cdm/product/template/AssetLeg',
  settlementDate: {
    description:
      'Specifies the settlement date of securities.  In a repo transaction the purchase date would always be the effective date as specified under Economic Terms, the repurchase date would always be the termination date as specified under Economic Terms.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '2Dr79mc7tDo84pCgLDhmSAuay1naC42UUovCTcaMjY5R',
    },
  },
};

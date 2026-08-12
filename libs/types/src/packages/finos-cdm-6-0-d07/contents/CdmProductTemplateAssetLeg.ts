export const CdmProductTemplateAssetLeg: Record<string, unknown> = {
  deliveryMethod: {
    description: 'Specifies a delivery method for the security transaction.',
    schema: {
      required: true,
    },
    type: {
      blueId: '5iL9bNQZtovMdjf58xxBWQAkcVcWKsbnNommKPsLfwsZ',
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
      blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
    },
  },
};

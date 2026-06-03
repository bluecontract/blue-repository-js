export const CdmProductCollateralContactElection: Record<string, unknown> = {
  description:
    "A class to specify the parties' election to specify contact information, in relation to elections such as the Addresses for Transfer or the Demand and Notices as specified in the ISDA Credit Support Annex agreement.\n",
  name: 'cdm/product/collateral/ContactElection',
  partyElection: {
    description: "The parties' contact information election.",
    itemType: {
      blueId: '8otMB7Qhn3fyzdqcuRMH14nKuDGiaWnjVXn45TJ7SBLR',
    },
    schema: {
      maxItems: 2,
      minItems: 2,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};

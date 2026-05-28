export const CdmEventWorkflowLimitApplicableExtended = {
  amountRemaining: {
    description:
      'The limit remaining for the limit level and limit type. This does not take into account any pending trades. While the attribute is of type integer in FpML and the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  amountUtilized: {
    description:
      'The limit utilised by all the cleared trades for the limit level and limit type. While the attribute is of type integer in FpML and the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  clipSize: {
    description:
      'This element is required in FpML, optional in CDM for the purpose of accommodating the CME data representation while making reference to the FpML one.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  currency: {
    description:
      'The currency in which the applicable limit is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.\n',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  description:
    'A class to represent the CDM attributes that are not part of the FpML standard. Once broader usage is confirmed, it is expected that those two classes can be collapsed.\n',
  limitAmount: {
    description:
      'The total limit available for the limit level and limit type. While the attribute is of type integer in the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  limitImpactDueToTrade: {
    description:
      'The limit utilized by this specific trade. While the attribute is of type integer in the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  limitLevel: {
    description:
      'The level at which the limit is set: customer business, proprietary business or account level. This attribute is specified as a string as part of the CME clearing confirmation specification.\n',
    type: {
      blueId: '7VnSHn8rstQhmaLbXZA83RTKM3Kcjw68ebKhohRvD2mA',
    },
  },
  limitType: {
    description:
      'Standard code to indicate which type of credit line is being referred to - i.e. IM, DV01, PV01, CS01, Notional, Clip Size, Notional, maximumOrderQuantity.\n',
    type: {
      blueId: 'ZRQoGVDtnXG3DMztqxmZoXT8DTZM1bAdtyW3JLZzS25',
    },
  },
  name: 'cdm/event/workflow/LimitApplicableExtended',
  utilization: {
    type: {
      blueId: '78EQYkDkf7rGpcLm6EChjXZahyPjkpNnuPg5fpQ2FQEk',
    },
  },
  velocity: {
    type: {
      blueId: 'ACjVrd9M4uVUxaFUuoq8puE5GX9w3TWnMxGNJCW8BGdo',
    },
  },
} as const;

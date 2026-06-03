export const CdmEventWorkflowLimitApplicableExtended: Record<string, unknown> =
  {
    amountRemaining: {
      description:
        'The limit remaining for the limit level and limit type. This does not take into account any pending trades. While the attribute is of type integer in FpML and the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.\n',
      type: {
        blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
      },
    },
    amountUtilized: {
      description:
        'The limit utilised by all the cleared trades for the limit level and limit type. While the attribute is of type integer in FpML and the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.\n',
      type: {
        blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
      },
    },
    clipSize: {
      description:
        'This element is required in FpML, optional in CDM for the purpose of accommodating the CME data representation while making reference to the FpML one.\n',
      type: {
        blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
      },
    },
    currency: {
      description:
        'The currency in which the applicable limit is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.\n',
      type: {
        blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
      },
    },
    description:
      'A class to represent the CDM attributes that are not part of the FpML standard. Once broader usage is confirmed, it is expected that those two classes can be collapsed.\n',
    limitAmount: {
      description:
        'The total limit available for the limit level and limit type. While the attribute is of type integer in the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.\n',
      type: {
        blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
      },
    },
    limitImpactDueToTrade: {
      description:
        'The limit utilized by this specific trade. While the attribute is of type integer in the CME schema, it has been specified to be of type number in the CDM to take into consideration java size limits as well as for consistency purposes with the way most monetary amounts are expressed.\n',
      type: {
        blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
      },
    },
    limitLevel: {
      description:
        'The level at which the limit is set: customer business, proprietary business or account level. This attribute is specified as a string as part of the CME clearing confirmation specification.\n',
      type: {
        blueId: 'umfXQbzquU2FEApASMDmHC7pUrpJatVHuKZmEBofQ7g',
      },
    },
    limitType: {
      description:
        'Standard code to indicate which type of credit line is being referred to - i.e. IM, DV01, PV01, CS01, Notional, Clip Size, Notional, maximumOrderQuantity.\n',
      type: {
        blueId: 'BRdxjWnBGUSh37id1GM71wzr5JbVB7YUZknt2qh1GRd5',
      },
    },
    name: 'cdm/event/workflow/LimitApplicableExtended',
    utilization: {
      type: {
        blueId: '6jrB2pq8NLHiipfLLWQHfSy6DxQvWsHdiVcQ4VP3BUFy',
      },
    },
    velocity: {
      type: {
        blueId: 'B2QkNd6opHqfsBrrTAsNeuzDJGQoGukZ6M3oQ254E6ag',
      },
    },
  };

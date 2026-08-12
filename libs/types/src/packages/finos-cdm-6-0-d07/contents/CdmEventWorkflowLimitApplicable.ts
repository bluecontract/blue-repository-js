export const CdmEventWorkflowLimitApplicable: Record<string, unknown> = {
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
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  limitType: {
    description:
      'Standard code to indicate which type of credit line is being referred to - i.e. IM, DV01, PV01, CS01, Notional, Clip Size, Notional, maximumOrderQuantity.\n',
    type: {
      blueId: 'XVxdSEMV4oFDKCQukLBfXD3FmtXm51L51G1CCF1mDiE',
    },
  },
  name: 'cdm/event/workflow/LimitApplicable',
  utilization: {
    type: {
      blueId: '6jrB2pq8NLHiipfLLWQHfSy6DxQvWsHdiVcQ4VP3BUFy',
    },
  },
  velocity: {
    type: {
      blueId: '9R7956BbBjP2muYFxR6YvMZ5XdcSzG8S47MN2Dmp2rkT',
    },
  },
};

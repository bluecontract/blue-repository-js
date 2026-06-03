export const CdmProductCommonSettlementDeliverableObligations: Record<
  string,
  unknown
> = {
  acceleratedOrMatured: {
    description:
      'A deliverable obligation characteristic. An obligation at time of default is due to mature and due to be repaid, or as a result of downgrade/bankruptcy is due to be repaid as a result of an acceleration clause. ISDA 2003 Term: Accelerated or Matured.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  accruedInterest: {
    description:
      'Indicates whether accrued interest is included (true) or not (false). For cash settlement this specifies whether quotations should be obtained inclusive or not of accrued interest. For physical settlement this specifies whether the buyer should deliver the obligation with an outstanding principal balance that includes or excludes accrued interest. ISDA 2003 Term: Include/Exclude Accrued Interest.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  assignableLoan: {
    description:
      'A deliverable obligation characteristic. A loan that is freely assignable to a bank or financial institution without the consent of the Reference Entity or the guarantor, if any, of the loan (or the consent of the applicable borrower if a Reference Entity is guaranteeing the loan) or any agent. ISDA 2003 Term: Assignable Loan.\n',
    type: {
      blueId: 'CfL1c8JN1WqjG49j7D1R5Sb4acqi6yrgcRdEo3jHGKMR',
    },
  },
  category: {
    description:
      'Used in both obligations and deliverable obligations to represent a class or type of securities which apply. ISDA 2003 Term: Obligation Category/Deliverable Obligation Category.\n',
    type: {
      blueId: '3kqHna3Z2FVYvPx85aDFr4WH2NPEmuQhrh8XXzbkQosH',
    },
  },
  consentRequiredLoan: {
    description:
      'A deliverable obligation characteristic. A loan that is capable of being assigned with the consent of the Reference Entity or the guarantor, if any, of the loan or any agent. ISDA 2003 Term: Consent Required Loan.\n',
    type: {
      blueId: 'CfL1c8JN1WqjG49j7D1R5Sb4acqi6yrgcRdEo3jHGKMR',
    },
  },
  description:
    'A class to specify all the ISDA terms relevant to defining the deliverable obligations.',
  directLoanParticipation: {
    description:
      'A deliverable obligation characteristic. A loan with a participation agreement whereby the buyer is capable of creating, or procuring the creation of, a contractual right in favour of the seller that provides the seller with recourse to the participation seller for a specified share in any payments due under the relevant loan which are received by the participation seller. ISDA 2003 Term: Direct Loan Participation.\n',
    type: {
      blueId: 'G14P9maXfUePjqhHWmNFfQEWPG5NJ18iL3rpGBMoLyDZ',
    },
  },
  excluded: {
    description:
      'A free format string to specify any excluded obligations or deliverable obligations, as the case may be, of the reference entity or excluded types of obligations or deliverable obligations. ISDA 2003 Term: Excluded Obligations/Excluded Deliverable Obligations.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  fullFaithAndCreditObLiability: {
    description:
      'An obligation and deliverable obligation characteristic. Defined in the ISDA published additional provisions for U.S. Municipal as Reference Entity. ISDA 2003 Term: Full Faith and Credit Obligation Liability.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  generalFundObligationLiability: {
    description:
      'An obligation and deliverable obligation characteristic. Defined in the ISDA published additional provisions for U.S. Municipal as Reference Entity. ISDA 2003 Term: General Fund Obligation Liability.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  indirectLoanParticipation: {
    description:
      'ISDA 1999 Term: Indirect Loan Participation. NOTE: Only applicable as a deliverable obligation under ISDA Credit 1999.\n',
    type: {
      blueId: 'G14P9maXfUePjqhHWmNFfQEWPG5NJ18iL3rpGBMoLyDZ',
    },
  },
  listed: {
    description:
      'An obligation and deliverable obligation characteristic. Indicates whether or not the obligation is quoted, listed or ordinarily purchased and sold on an exchange. ISDA 2003 Term: Listed.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  maximumMaturity: {
    description:
      'A deliverable obligation characteristic. An obligation that has a remaining maturity from the Physical Settlement Date of not greater than the period specified. ISDA 2003 Term: Maximum Maturity.\n',
    type: {
      blueId: 'G5BwzTWEaA14NoPKn8iSwCnmwnWuQegPHZwrpgagS6kY',
    },
  },
  name: 'cdm/product/common/settlement/DeliverableObligations',
  notBearer: {
    description:
      'A deliverable obligation characteristic. Any obligation that is not a bearer instrument. This applies to Bonds only and is meant to avoid tax, fraud and security/delivery provisions that can potentially be associated with Bearer Bonds. ISDA 2003 Term: Not Bearer.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  notContingent: {
    description:
      'A deliverable obligation characteristic. In essence Not Contingent means the repayment of principal cannot be dependant on a formula/index, i.e. to prevent the risk of being delivered an instrument that may never pay any element of principal, and to ensure that the obligation is interest bearing (on a regular schedule). ISDA 2003 Term: Not Contingent.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  notDomesticCurrency: {
    description:
      'An obligation and deliverable obligation characteristic. Any obligation that is payable in any currency other than the domestic currency. Domestic currency is either the currency so specified or, if no currency is specified, the currency of (a) the reference entity, if the reference entity is a sovereign, or (b) the jurisdiction in which the relevant reference entity is organised, if the reference entity is not a sovereign. ISDA 2003 Term: Not Domestic Currency.\n',
    type: {
      blueId: 'GMpNRbtpXncDuLhyddMFw2W43rpm8H6AVYkoczBix3tG',
    },
  },
  notDomesticIssuance: {
    description:
      'An obligation and deliverable obligation characteristic. Any obligation other than an obligation that was intended to be offered for sale primarily in the domestic market of the relevant Reference Entity. This specifies that the obligation must be an internationally recognised bond. ISDA 2003 Term: Not Domestic Issuance.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  notDomesticLaw: {
    description:
      'An obligation and deliverable obligation characteristic. If the reference entity is a Sovereign, this means any obligation that is not subject to the laws of the reference entity. If the reference entity is not a sovereign, this means any obligation that is not subject to the laws of the jurisdiction of the reference entity. ISDA 2003 Term: Not Domestic Law.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  notSovereignLender: {
    description:
      'An obligation and deliverable obligation characteristic. Any obligation that is not primarily (majority) owed to a Sovereign or Supranational Organisation. ISDA 2003 Term: Not Sovereign Lender.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  notSubordinated: {
    description:
      'An obligation and deliverable obligation characteristic. An obligation that ranks at least equal with the most senior Reference Obligation in priority of payment or, if no Reference Obligation is specified in the related Confirmation, the obligations of the Reference Entity that are senior. ISDA 2003 Term: Not Subordinated.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  othReferenceEntityObligations: {
    description:
      'This element is used to specify any other obligations of a reference entity in both obligations and deliverable obligations. The obligations can be specified free-form. ISDA 2003 Term: Other Obligations of a Reference Entity.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  revenueObligationLiability: {
    description:
      'An obligation and deliverable obligation characteristic. Defined in the ISDA published additional provisions for U.S. Municipal as Reference Entity. ISDA 2003 Term: Revenue Obligation Liability.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  specifiedCurrency: {
    description:
      'An obligation and deliverable obligation characteristic. The currency or currencies in which an obligation or deliverable obligation must be payable. ISDA 2003 Term: Specified Currency.\n',
    type: {
      blueId: 'GgYvaTiQsh1xn3XTCrAaxQ7jizAVYyU7EnLPR5eZdVUp',
    },
  },
  transferable: {
    description:
      'A deliverable obligation characteristic. An obligation that is transferable to institutional investors without any contractual, statutory or regulatory restrictions. ISDA 2003 Term: Transferable.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
};

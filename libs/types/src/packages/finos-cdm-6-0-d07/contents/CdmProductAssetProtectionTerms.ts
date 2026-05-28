export const CdmProductAssetProtectionTerms = {
  creditEvents: {
    description:
      'Specifies the applicable Credit Events that would trigger a settlement, as specified in the related Confirmation and defined in the ISDA 2014 Credit Definition article IV section 4.1.\n',
    type: {
      blueId: 'HWbAdp28QNY1ehyUyubaSbcB8FhMbDv3qp7poZxNn9mM',
    },
  },
  description:
    'A class to specify the terms for calculating a payout to protect the buyer of the swap in the case of a qualified credit event. These terms include the applicable credit events, the reference obligation, and in the case of a CDS on mortgage-backed securities, the floatingAmountEvents.\n',
  floatingAmountEvents: {
    description:
      'This element contains the ISDA terms relating to the floating rate payment events and the implied additional fixed payments, applicable to the credit derivatives transactions on mortgage-backed securities with pay-as-you-go or physical settlement.\n',
    type: {
      blueId: 'AfcYntvhQ2t2vgDhAMWwSr5ppeynG2uGcXJKuBR3wzw7',
    },
  },
  name: 'cdm/product/asset/ProtectionTerms',
  obligations: {
    description:
      'The underlying obligations of the reference entity on which you are buying or selling protection. The credit events Failure to Pay, Obligation Acceleration, Obligation Default, Restructuring, Repudiation/Moratorium are defined with respect to these obligations.\n',
    type: {
      blueId: '81CgZwLx8Rj95fxGdWZWogMwu49Nt63P7S4jVVGzbbNd',
    },
  },
} as const;

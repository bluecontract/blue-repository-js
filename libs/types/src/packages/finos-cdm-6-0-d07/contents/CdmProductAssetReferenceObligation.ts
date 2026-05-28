export const CdmProductAssetReferenceObligation = {
  description:
    'A class to specify the reference obligation that is associated with a credit derivative instrument.',
  guarantor: {
    description:
      'The party that guarantees by way of a contractual arrangement to pay the debts of an obligor if the obligor is unable to make the required payments itself. ISDA 2003 Term: Guarantor.\n',
    type: {
      blueId: '6NmyTe5CqfuusJQg46VWDV5a5FXqiZnkQmXduwAjC73o',
    },
  },
  guarantorReference: {
    description:
      'A pointer style reference to a reference entity defined elsewhere in the document. Used when the reference entity is the guarantor.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  loan: {
    description: 'Identifies the underlying asset when it is a loan.',
    type: {
      blueId: 'DVipsn2Vc1vxevvyncjA1XjeWrMHt7pCWmHgf444oA6A',
    },
  },
  name: 'cdm/product/asset/ReferenceObligation',
  primaryObligor: {
    description:
      'The entity primarily responsible for repaying debt to a creditor as a result of borrowing or issuing bonds. ISDA 2003 Term: Primary Obligor.\n',
    type: {
      blueId: '6NmyTe5CqfuusJQg46VWDV5a5FXqiZnkQmXduwAjC73o',
    },
  },
  primaryObligorReference: {
    description:
      'A pointer style reference to a reference entity defined elsewhere in the document. Used when the reference entity is the primary obligor.\n',
    type: {
      blueId: 'CEiSj56t3pfX2pXr4xSE9ejLoG6NgvSmjdYCMPxiNCRK',
    },
  },
  security: {
    description:
      'Identifies the underlying asset when it is a security, such as a bond or convertible bond. The security data type requires one or more productIdentifiers, specificaiton of the security type (e.g. debt), and includes optional attributes to specify a debt class, such as asset-backed, as well as seniority.\n',
    type: {
      blueId: 'AKAF6F23pDRPx5M9gsqtAKXBUf46Vnz1STHsk38YEAWm',
    },
  },
  standardReferenceObligation: {
    description:
      'Indicates if the reference obligation is a Standard Reference Obligation. ISDA 2014 Term: Standard Reference Obligation.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
} as const;

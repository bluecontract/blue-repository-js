export const CdmProductAssetReferenceObligation: Record<string, unknown> = {
  description:
    'A class to specify the reference obligation that is associated with a credit derivative instrument.',
  guarantor: {
    description:
      'The party that guarantees by way of a contractual arrangement to pay the debts of an obligor if the obligor is unable to make the required payments itself. ISDA 2003 Term: Guarantor.\n',
    type: {
      blueId: 'J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y',
    },
  },
  guarantorReference: {
    description:
      'A pointer style reference to a reference entity defined elsewhere in the document. Used when the reference entity is the guarantor.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  loan: {
    description: 'Identifies the underlying asset when it is a loan.',
    type: {
      blueId: '7Zg8UpGuEWYf4C37rRkZ2wK1qdAiHaebivQNjduH4Qd2',
    },
  },
  name: 'cdm/product/asset/ReferenceObligation',
  primaryObligor: {
    description:
      'The entity primarily responsible for repaying debt to a creditor as a result of borrowing or issuing bonds. ISDA 2003 Term: Primary Obligor.\n',
    type: {
      blueId: 'J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y',
    },
  },
  primaryObligorReference: {
    description:
      'A pointer style reference to a reference entity defined elsewhere in the document. Used when the reference entity is the primary obligor.\n',
    type: {
      blueId: '2y5oTswWqzzAdz3YW657fXdmY8ENhbHAEWBxJwfmi5f3',
    },
  },
  security: {
    description:
      'Identifies the underlying asset when it is a security, such as a bond or convertible bond. The security data type requires one or more productIdentifiers, specificaiton of the security type (e.g. debt), and includes optional attributes to specify a debt class, such as asset-backed, as well as seniority.\n',
    type: {
      blueId: 'GRccc39hoCxirVd5AgYHyNZT6TtiBJj8USkFUA6nQcfG',
    },
  },
  standardReferenceObligation: {
    description:
      'Indicates if the reference obligation is a Standard Reference Obligation. ISDA 2014 Term: Standard Reference Obligation.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
};

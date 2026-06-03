export const CdmProductCollateralEligibilityQuery: Record<string, unknown> = {
  agencyRating: {
    description:
      'The agency rating based on default risk and creditors claim in event of default associated with specific instrument.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HWoMhvUF5jLNHYsFt98RcicKv9j3hQxYEeWQkzZHHMBU',
    },
  },
  assetCountryOfOrigin: {
    description: 'The asset country of origin.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9ppB13T87oA9HL9NWZr6pkLmcjb1HmUAgzVGS7yDyttw',
    },
  },
  collateralAssetType: {
    description: 'The asset product type.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AjHv57wVryq4YK8oodLNAT95JAYhuGRRiKk7hhX93LLi',
    },
  },
  denominatedCurrency: {
    description: 'The underlying asset denominated currency.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Gb5ryH6JKgjNLySafKo7tXkb9PRgaQkWHcSibFZ96AbP',
    },
  },
  description: 'Query to check against an EligibleCollateralSpecification',
  issuerName: {
    description: 'Specifies the issuing entity name or LEI.',
    schema: {
      required: true,
    },
    type: {
      blueId: '6LRw3aCeJHKD7qGzs2HvJDoQiMs8QddUf5wSr4oagtuS',
    },
  },
  issuerType: {
    description:
      'Represents a filter based on the type of entity issuing the asset.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GL9FygufGouoWPdbzaZ4SKyuRahWMAUxZ5q3bFMSWnRj',
    },
  },
  maturity: {
    description: 'Maturity in years',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/product/collateral/EligibilityQuery',
};

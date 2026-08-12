export const CdmProductCollateralEligibilityQuery: Record<string, unknown> = {
  agencyRating: {
    description:
      'The agency rating based on default risk and creditors claim in event of default associated with specific instrument.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HecpRL1z9mNunKs8iVwbjdGKMKf8o5t6v16ewNozwrff',
    },
  },
  assetCountryOfOrigin: {
    description: 'The asset country of origin.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'mfnU3a3EHham9Ji56wc4EzqkHqrWpTpWuwvp9bK3DJB',
    },
  },
  collateralAssetType: {
    description: 'The asset product type.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GYosLnxXxsEormFDHeohsEEMxPt7FWvEs89hCYk6UHXA',
    },
  },
  denominatedCurrency: {
    description: 'The underlying asset denominated currency.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'FhPnZj2GHsVFKjpG7XMywvjaX6i39gczdhSKJsMHyiEJ',
    },
  },
  description: 'Query to check against an EligibleCollateralSpecification',
  issuerName: {
    description: 'Specifies the issuing entity name or LEI.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'J5hsqA8x6vAprJRs7gFhvm5bsp5TZNBgEdhytAapat8y',
    },
  },
  issuerType: {
    description:
      'Represents a filter based on the type of entity issuing the asset.',
    schema: {
      required: true,
    },
    type: {
      blueId: '7NdxcUK32ve5yCHHJmMNTHsGHDYoGXvWiqPz9bQy5rbU',
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

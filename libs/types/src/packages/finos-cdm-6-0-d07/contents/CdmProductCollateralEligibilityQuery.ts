export const CdmProductCollateralEligibilityQuery = {
  agencyRating: {
    description:
      'The agency rating based on default risk and creditors claim in event of default associated with specific instrument.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'EFt5vpwMjQFJJ8LHLDpuEqY5R7UNo6zDPqdti3crxcVv',
    },
  },
  assetCountryOfOrigin: {
    description: 'The asset country of origin.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DAxrfnnD9436ZRpQ3FGCM1i7Xq8brfqBB5cYxBuSuyag',
    },
  },
  collateralAssetType: {
    description: 'The asset product type.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DBnAMusnqCBb9qkA5usvmPTb27HNy5VzKi8JoTrgPoRV',
    },
  },
  denominatedCurrency: {
    description: 'The underlying asset denominated currency.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '8BnAu36c4Gt6aVwBhawFckQGNkLaZsPodbBkQd7GpV8V',
    },
  },
  description: 'Query to check against an EligibleCollateralSpecification',
  issuerName: {
    description: 'Specifies the issuing entity name or LEI.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '6NmyTe5CqfuusJQg46VWDV5a5FXqiZnkQmXduwAjC73o',
    },
  },
  issuerType: {
    description:
      'Represents a filter based on the type of entity issuing the asset.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DiuzkpaQqLNDsehNb5xLTrFkVqpEqS9ZGtqTJ2fBzhvm',
    },
  },
  maturity: {
    description: 'Maturity in years',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  name: 'cdm/product/collateral/EligibilityQuery',
} as const;

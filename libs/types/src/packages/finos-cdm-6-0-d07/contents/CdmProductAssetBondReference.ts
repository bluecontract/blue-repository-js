export const CdmProductAssetBondReference = {
  bond: {
    description: 'Reference to a bond underlier.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'AKAF6F23pDRPx5M9gsqtAKXBUf46Vnz1STHsk38YEAWm',
    },
  },
  conditionPrecedentBond: {
    description:
      'To indicate whether the Condition Precedent Bond is applicable. The swap contract is only valid if the bond is issued and if there is any dispute over the terms of fixed stream then the bond terms would be used.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  couponRate: {
    description:
      'Specifies the coupon rate (expressed in percentage) of a fixed income security or convertible bond.',
    type: {
      blueId: '46SWDPN5nuL9ZzDydHQsubnAhiJ9bTSAdCTzFqR4v3uz',
    },
  },
  description:
    'Reference to a bond underlier to represent an asset swap or Condition Precedent Bond.',
  discrepancyClause: {
    description: 'To indicate whether the Discrepancy Clause is applicable.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/product/asset/BondReference',
} as const;

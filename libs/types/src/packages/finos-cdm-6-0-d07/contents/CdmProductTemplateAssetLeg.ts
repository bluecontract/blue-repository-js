export const CdmProductTemplateAssetLeg = {
  deliveryMethod: {
    description: 'Specifies a delivery method for the security transaction.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'FRoMknL5tLocYSiFfWHQdaNh9P69TCfagyqaUDB7r1fx',
    },
  },
  description: 'Defines each asset movement of an asset payout.',
  name: 'cdm/product/template/AssetLeg',
  settlementDate: {
    description:
      'Specifies the settlement date of securities.  In a repo transaction the purchase date would always be the effective date as specified under Economic Terms, the repurchase date would always be the termination date as specified under Economic Terms.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
} as const;

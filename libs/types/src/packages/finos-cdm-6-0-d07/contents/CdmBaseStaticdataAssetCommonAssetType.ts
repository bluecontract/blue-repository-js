export const CdmBaseStaticdataAssetCommonAssetType = {
  assetType: {
    description: 'Represents a filter based on the type of collateral asset.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '8pEtwrEnUXP8pCx6Madi5B3qyA2oDyHVfxyVjkX8qhL2',
    },
  },
  debtType: {
    description: 'Represents a filter based on the type of bond.',
    type: {
      blueId: '8zRMsseB4URcb7VtWt5Lk3W3aftmSFekTiuo4Ab3orEP',
    },
  },
  description:
    'Represents a class to allow specification of the asset product type.',
  equityType: {
    description: 'Represents a filter based on the type of equity.',
    type: {
      blueId: '6CG21iTqgkhkNe8QKj5A9BYagGYdz7YVNXQ1WK7UZtZG',
    },
  },
  fundType: {
    description: 'Represents a filter based on the type of fund.',
    type: {
      blueId: 'HCjRKFns6xhAbeXFMGXkGdJv7QjQ42YLS3H2KTtjprU3',
    },
  },
  name: 'cdm/base/staticdata/asset/common/AssetType',
  otherAssetType: {
    description: 'Specifies the eligible asset type when not enumerated.',
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  securityType: {
    description: 'Represents a filter based on the type of security.',
    type: {
      blueId: '62KT7CCANTnUvju5nRQRPnwuRqsRPapXwdQJjLqhyo8C',
    },
  },
} as const;

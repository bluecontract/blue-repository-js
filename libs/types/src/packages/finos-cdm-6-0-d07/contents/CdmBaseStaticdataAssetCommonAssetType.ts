export const CdmBaseStaticdataAssetCommonAssetType: Record<string, unknown> = {
  assetType: {
    description: 'Represents a filter based on the type of collateral asset.',
    schema: {
      required: true,
    },
    type: {
      blueId: '2ooSGfiQjuRvoogDtvMSjAoYBUtjFfAMekySyiXeH169',
    },
  },
  debtType: {
    description: 'Represents a filter based on the type of bond.',
    type: {
      blueId: '6unwaZ5oN6Bu5iNr9srEotBvRczagJYM6Dob6AfjsYhP',
    },
  },
  description:
    'Represents a class to allow specification of the asset product type.',
  equityType: {
    description: 'Represents a filter based on the type of equity.',
    type: {
      blueId: 'HoXHzdjP8HF4D5i1bFfyUQk6jiaxNMCFBYEZfUuNdLR5',
    },
  },
  fundType: {
    description: 'Represents a filter based on the type of fund.',
    type: {
      blueId: 'DSHVccfaB84HdmUWNumGMEdFG9xvr7m5qAJSTVv2R81X',
    },
  },
  name: 'cdm/base/staticdata/asset/common/AssetType',
  otherAssetType: {
    description: 'Specifies the eligible asset type when not enumerated.',
    itemType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  securityType: {
    description: 'Represents a filter based on the type of security.',
    type: {
      blueId: '3tHNfJC2pEoNbjbkmKcBDiJFzKcUCcyi6jtqtPntYyFw',
    },
  },
};

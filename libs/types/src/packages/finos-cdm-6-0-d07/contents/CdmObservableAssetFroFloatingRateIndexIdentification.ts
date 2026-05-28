export const CdmObservableAssetFroFloatingRateIndexIdentification = {
  currency: {
    description: 'FRO currency - 3 character ISO currrency code',
    type: {
      blueId: 'ByfckK7AWY3YWapMTruTAWXvgAmfacrawZvg5LmjhND3',
    },
  },
  floatingRateIndex: {
    description:
      'The reference index that is used to specify the floating interest rate. The FpML standard maintains the list of such indices, which are positioned as enumeration values as part of the CDM.\n',
    type: {
      blueId: 'D1NQDMjhdP9hVZMeu9eipm9vH3aGJP3Zn1Ea8snMVxam',
    },
  },
  froType: {
    description: 'FRO type (e.g. OIS)',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'cdm/observable/asset/fro/FloatingRateIndexIdentification',
} as const;

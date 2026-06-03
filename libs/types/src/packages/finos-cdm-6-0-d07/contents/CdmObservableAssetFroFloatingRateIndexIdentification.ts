export const CdmObservableAssetFroFloatingRateIndexIdentification: Record<
  string,
  unknown
> = {
  currency: {
    description: 'FRO currency - 3 character ISO currrency code',
    type: {
      blueId: 'Gu97NnLopxnvJeTi1J3ygTVWYehmh6xiwRabP93c6Y8r',
    },
  },
  floatingRateIndex: {
    description:
      'The reference index that is used to specify the floating interest rate. The FpML standard maintains the list of such indices, which are positioned as enumeration values as part of the CDM.\n',
    type: {
      blueId: '2qVsAJiDNKtcYeoPmttQzFLH44MsczpvMvQ9ZQvwUW6Z',
    },
  },
  froType: {
    description: 'FRO type (e.g. OIS)',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/observable/asset/fro/FloatingRateIndexIdentification',
};

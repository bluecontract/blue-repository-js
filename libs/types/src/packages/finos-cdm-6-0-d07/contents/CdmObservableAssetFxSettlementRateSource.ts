export const CdmObservableAssetFxSettlementRateSource = {
  description: 'The source of the Foreign Exchange settlement rate.',
  name: 'cdm/observable/asset/FxSettlementRateSource',
  nonstandardSettlementRate: {
    description:
      'Indicates that a non-standard rate source will be used for the fixing.',
    type: {
      blueId: 'F1apuBfHekENK3SqhCbhgdcHymV6jcuhFhC45BZhuy9J',
    },
  },
  settlementRateOption: {
    description:
      'Indicates that an officially defined rate settlement rate option will be the used for the fixing.',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
} as const;

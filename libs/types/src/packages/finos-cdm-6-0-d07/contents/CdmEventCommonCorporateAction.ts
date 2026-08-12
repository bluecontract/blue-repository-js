export const CdmEventCommonCorporateAction: Record<string, unknown> = {
  corporateActionType: {
    description: 'The type of corporate action taking place.',
    schema: {
      required: true,
    },
    type: {
      blueId: '8CunnBK9d9T4uuangx5iLWyAisgbJvXeXi25J7Z91ZC8',
    },
  },
  description: 'Specifies the relevant data regarding a corporate action.',
  exDate: {
    description:
      'The date on which the corporate action is known to have taken place.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/event/common/CorporateAction',
  payDate: {
    description:
      'The date on which resulting from the corporate action are delivered.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  underlier: {
    description: 'The underlier impacted by the corporate action.',
    schema: {
      required: true,
    },
    type: {
      blueId: '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#2',
    },
  },
};

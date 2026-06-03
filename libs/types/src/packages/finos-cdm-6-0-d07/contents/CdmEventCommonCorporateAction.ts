export const CdmEventCommonCorporateAction: Record<string, unknown> = {
  corporateActionType: {
    description: 'The type of corporate action taking place.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GFvEqH3FNnzTFFJAqMgygUiVX9vA45GDjiV95ZqP4qAR',
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
      blueId: '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#3',
    },
  },
};

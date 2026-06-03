export const CdmEventCommonReturnInstruction: Record<string, unknown> = {
  description:
    'Specifies the information required to create the return of a Security Finance Transaction.',
  name: 'cdm/event/common/ReturnInstruction',
  quantity: {
    description:
      'Specifies the quantity of shares and cash to be returned in a partial return event.',
    itemType: {
      blueId: 'DGJZYRtm8AD2nG2o56eH5EDc8FujZiiXmBsuHgLf3UCR',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};

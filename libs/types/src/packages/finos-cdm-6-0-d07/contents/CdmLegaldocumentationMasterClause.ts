export const CdmLegaldocumentationMasterClause: Record<string, unknown> = {
  description:
    'A type for documenting additional clause that cannot yet be represented with the model and yet needed for a digital representation of the agreement\n',
  identifier: {
    description: 'The  name or identifier associated to this clause',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/legaldocumentation/master/Clause',
  subcomponents: {
    description:
      'Additional hierarchichal components of the clause if relevant',
    itemType: {
      blueId: 'this#0',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  terms: {
    description: 'Content of this bespoke clause',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};

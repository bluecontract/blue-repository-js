export const CdmBaseStaticdataPartyReferenceBank: Record<string, unknown> = {
  description:
    'A class to describe an institution (party) identified by means of a coding scheme and an optional name.',
  name: 'cdm/base/staticdata/party/ReferenceBank',
  referenceBankId: {
    description:
      'An institution (party) identifier, e.g. a bank identifier code (BIC). FpML specifies a referenceBankIdScheme.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  referenceBankName: {
    description:
      'The name of the institution (party). A free format string. FpML does not define usage rules for the element.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};

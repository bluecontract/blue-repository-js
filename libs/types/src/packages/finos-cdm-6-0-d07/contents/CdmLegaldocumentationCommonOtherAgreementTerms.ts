export const CdmLegaldocumentationCommonOtherAgreementTerms: Record<
  string,
  unknown
> = {
  description:
    'A class to specify a related legal agreement. For example, ISDA 2016 Credit Support Annex for Initial Margin, paragraph 13, General Principles, (s): Other CSA and Japanese Law CSA (VM). | ISDA 2016 Credit Support Annex for Variation Margin, paragraph 13, (o): Other CSA.\n',
  isSpecified: {
    description:
      'The qualification of whether some other related agreement is specified (True) or not (False).',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  legalDocument: {
    description:
      'The specification of this other agreement, when the qualification is True.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/legaldocumentation/common/OtherAgreementTerms',
};

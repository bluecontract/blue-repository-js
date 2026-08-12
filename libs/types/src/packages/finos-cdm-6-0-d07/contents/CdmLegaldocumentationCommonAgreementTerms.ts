export const CdmLegaldocumentationCommonAgreementTerms: Record<
  string,
  unknown
> = {
  agreement: {
    description:
      'Specification of the standard set of terms that define a legal agreement.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'DTCMrR8qY9BpbXqsCRwfEYiDY2fo4LEFLGBGTPQSA38A',
    },
  },
  clauseLibrary: {
    description:
      'Specification of whether the agreement terms have been negotiated using the clause library methodology.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  counterparty: {
    description:
      'Specification of the roles of the counterparties to the agreement.',
    itemType: {
      blueId: '57Lwnif22McYRjgDzSyRZTsqY1Ac9LMSJcJ9KRXKiE6w',
    },
    schema: {
      maxItems: 2,
      minItems: 2,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description: 'Specification of the content of a legal agreement.',
  name: 'cdm/legaldocumentation/common/AgreementTerms',
};

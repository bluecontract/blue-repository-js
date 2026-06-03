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
      blueId: '24XR8iGVZsSMcRtHNgWSpYEEza3KosniTayAxz2hnncm',
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
      blueId: '58TeStN7sJrzoG3o1U7FZq3fFkxbCXkvdWPYYZkf1r3x',
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

export const CdmLegaldocumentationCommonLegalAgreementBase: Record<
  string,
  unknown
> = {
  agreementDate: {
    description:
      'The date on which the legal agreement has been agreed between the parties. This corresponds to the Date of Deed in an English Law document.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  attachment: {
    description: 'A human readable document, for example a confirmation.',
    itemType: {
      blueId: 'HmhKdAbT2MRZUsE7sCtNxWo8eestifsJAK5KCzFN5bn2',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  contractualParty: {
    description:
      'The two contractual parties to the legal agreement, which reference information is positioned as part of the partyInformation attribute.\n',
    itemType: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
    schema: {
      maxItems: 2,
      minItems: 2,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Specifies the legal agreement baseline information, being negotiated or having been executed. It excludes specialized elections\n',
  effectiveDate: {
    description:
      'The date on which, or as of which, the agreement is effective, if different from the agreement date. It is expected that it will most often correspond to the agreement date, although there could be situations where the parties will explicitly agree on a distinct effective date.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  identifier: {
    description:
      'The legal agreement identifier. Several identifiers can be specified.',
    itemType: {
      blueId: '2uYMDSb9jahYcE91VXzzWYsnUVct3k5thb1czx4jPYF7',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  legalAgreementIdentification: {
    description:
      'The type of legal agreement, identified via a set of composable attributes: agreementName, publisher, governing law and version, e.g. ISDA 2013 Standard Credit Support Annex English Law.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HKkvs9CCvwZwQxeN8m2GUQG1TrC5hsgoLjuSf1ztDGxF',
    },
  },
  name: 'cdm/legaldocumentation/common/LegalAgreementBase',
  otherParty: {
    description:
      'The role(s) that other party(ies) may have in relation to the legal agreement, further to the contractual parties.\n',
    itemType: {
      blueId: '6DrJREpu1Ms3M4U1q7jqGjM46V1o8vxq4K1i3X4dwMvz',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};

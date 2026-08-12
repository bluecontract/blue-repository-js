export const CdmLegaldocumentationCommonLegalAgreement: Record<
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
  agreementTerms: {
    description: 'Specification of the content of the legal agreement.',
    type: {
      blueId: '2Gh7VQwVWDZ4vcAdXjdgg5c5TrAaL5srKzUs1RZbDGyM',
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
    'The specification of a legal agreement between two parties, being negotiated or having been executed. This includes the baseline information and the optional specialised elections\n',
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
    type: {
      blueId: 'HKkvs9CCvwZwQxeN8m2GUQG1TrC5hsgoLjuSf1ztDGxF',
    },
  },
  name: 'cdm/legaldocumentation/common/LegalAgreement',
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
  relatedAgreements: {
    description:
      'Specifies the agreement(s) that govern the agreement, either as a reference to such agreements when specified as part of the CDM, or through identification of some of the key terms of those agreements, such as the type of agreement, the publisher, the vintage, the agreement identifier and the agreement date.\n',
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
  umbrellaAgreement: {
    description:
      'The determination of whether Umbrella Agreement terms are applicable (True) or Not Applicable (False).',
    type: {
      blueId: '4ZF1ACUpJC9QAXmiacFCvcxe9tNsuWiX2cTPFAExEmcz',
    },
  },
};

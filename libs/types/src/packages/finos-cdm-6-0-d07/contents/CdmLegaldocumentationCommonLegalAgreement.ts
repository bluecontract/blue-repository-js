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
      blueId: '4KjkUNqNW52EyuCcnzPCbMA8tfR6qRi9jXUsZ3s5vFTv',
    },
  },
  attachment: {
    description: 'A human readable document, for example a confirmation.',
    itemType: {
      blueId: '4anwVBorXr81GoC4Wkf4trYWror3mSXbzukXdYgwmG7N',
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
      blueId: '9tpFoqFu1yX5LZEATGF8CYsE5VSXhkQua9LMXwLEX2Pv',
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
      blueId: '7p7rsMrLJRwnskaTsetTmKypk1jyyLVvR6JTdJNYeFNf',
    },
  },
  name: 'cdm/legaldocumentation/common/LegalAgreement',
  otherParty: {
    description:
      'The role(s) that other party(ies) may have in relation to the legal agreement, further to the contractual parties.\n',
    itemType: {
      blueId: 'Hrt2EoYJokASG9J62NMKWt8UZbQN6BwtESp7hVDVQYvm',
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
      blueId: '34yZnruVzk2TWwJj25VXtQ6vJsyoHWmMQdFWUBQGYp1x',
    },
  },
};

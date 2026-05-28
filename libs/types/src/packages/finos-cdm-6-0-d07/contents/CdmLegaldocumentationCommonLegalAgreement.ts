export const CdmLegaldocumentationCommonLegalAgreement = {
  agreementDate: {
    description:
      'The date on which the legal agreement has been agreed between the parties. This corresponds to the Date of Deed in an English Law document.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  agreementTerms: {
    description: 'Specification of the content of the legal agreement.',
    type: {
      blueId: 'HyGbxWb5gZabiVhZkNgTGw4LRVjYgdzF3HEJdyeTtuvM',
    },
  },
  attachment: {
    description: 'A human readable document, for example a confirmation.',
    itemType: {
      blueId: '2fzQ4bmVx18K4uraBPwsuECfabcNN1YjL3czhxh3Da7k',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  contractualParty: {
    description:
      'The two contractual parties to the legal agreement, which reference information is positioned as part of the partyInformation attribute.\n',
    itemType: {
      blueId: 'GnY3garuhYiHPrATUwY5JKQmZJPACHzjobkgXbmNJCik',
    },
    schema: {
      maxItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    'The specification of a legal agreement between two parties, being negotiated or having been executed. This includes the baseline information and the optional specialised elections\n',
  effectiveDate: {
    description:
      'The date on which, or as of which, the agreement is effective, if different from the agreement date. It is expected that it will most often correspond to the agreement date, although there could be situations where the parties will explicitly agree on a distinct effective date.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  identifier: {
    description:
      'The legal agreement identifier. Several identifiers can be specified.',
    itemType: {
      blueId: '8eDineGwQr2VXBeVEPbnJZvEcNhDbLu8HtmubDT6RBoZ',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  legalAgreementIdentification: {
    description:
      'The type of legal agreement, identified via a set of composable attributes: agreementName, publisher, governing law and version, e.g. ISDA 2013 Standard Credit Support Annex English Law.\n',
    type: {
      blueId: '8w1bMmBxMPwfqicGZQvJc2KRac3pHCk1BFR3rzdBpzUx',
    },
  },
  name: 'cdm/legaldocumentation/common/LegalAgreement',
  otherParty: {
    description:
      'The role(s) that other party(ies) may have in relation to the legal agreement, further to the contractual parties.\n',
    itemType: {
      blueId: '8fXEqMXsnZAuwSFKfhiksmAPnV7yvaxSbmwgTbGrN75M',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  relatedAgreements: {
    description:
      'Specifies the agreement(s) that govern the agreement, either as a reference to such agreements when specified as part of the CDM, or through identification of some of the key terms of those agreements, such as the type of agreement, the publisher, the vintage, the agreement identifier and the agreement date.\n',
    itemType: {
      blueId: 'this#0',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  umbrellaAgreement: {
    description:
      'The determination of whether Umbrella Agreement terms are applicable (True) or Not Applicable (False).',
    type: {
      blueId: 'CdXm9LZqmWgFFgpoHDNCBYp7kGANguTUS1Zshm9tf4HF',
    },
  },
} as const;

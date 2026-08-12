export const CdmLegaldocumentationCommonLegalAgreementIdentification: Record<
  string,
  unknown
> = {
  agreementName: {
    description:
      'The legal agreement name, e.g. Credit Support Annex for Variation Margin.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GtNBAyAynbg5ak9tonuCZjYhuWCYH91kN9bCBbHYAsop',
    },
  },
  description:
    'Specifies the type of legal agreement, identified via a set of composable attributes: agreementName, publisher, governing law and version, e.g. ISDA 2013 Standard Credit Support Annex English Law.\n',
  governingLaw: {
    description:
      'The law governing the legal agreement, e.g. English Law, New York Law or Japanese Law.',
    type: {
      blueId: 'z6SZamzZPBf7wahsobLBrx2goNesh7LuekmBpFBheXp',
    },
  },
  name: 'cdm/legaldocumentation/common/LegalAgreementIdentification',
  publisher: {
    description: 'The legal agreement publisher, e.g. ISDA.',
    type: {
      blueId: '4YBVwfSaipgM53DLC5BrRsQhmUunG6XGS2FG5U4dPwUk',
    },
  },
  vintage: {
    description:
      'In the case where successive definitions of the legal agreement have been developed, the vintage identification. This is typically (but not necessarily) done by referencing the year, e.g. 2013 in the case of the ISDA 2013 Standard Credit Support Annex.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
};

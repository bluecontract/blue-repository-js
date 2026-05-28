export const CdmLegaldocumentationCommonLegalAgreementIdentification = {
  agreementName: {
    description:
      'The legal agreement name, e.g. Credit Support Annex for Variation Margin.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'F7fkku2HrNQ5jSPUdK2yWnWFShTMYUFJh1xqKudc3NLg',
    },
  },
  description:
    'Specifies the type of legal agreement, identified via a set of composable attributes: agreementName, publisher, governing law and version, e.g. ISDA 2013 Standard Credit Support Annex English Law.\n',
  governingLaw: {
    description:
      'The law governing the legal agreement, e.g. English Law, New York Law or Japanese Law.',
    type: {
      blueId: '28gUYx1HzG6py2PmTBRca9g3wdwdcVnEHvzAZX7PGUUG',
    },
  },
  name: 'cdm/legaldocumentation/common/LegalAgreementIdentification',
  publisher: {
    description: 'The legal agreement publisher, e.g. ISDA.',
    type: {
      blueId: 'CRozp4MyQcRb718xLH5WdVCyDSyimrwJKNMFoWND29qS',
    },
  },
  vintage: {
    description:
      'In the case where successive definitions of the legal agreement have been developed, the vintage identification. This is typically (but not necessarily) done by referencing the year, e.g. 2013 in the case of the ISDA 2013 Standard Credit Support Annex.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
} as const;

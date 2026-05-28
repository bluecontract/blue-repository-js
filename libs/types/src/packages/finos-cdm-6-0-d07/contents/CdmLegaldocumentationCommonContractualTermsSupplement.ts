export const CdmLegaldocumentationCommonContractualTermsSupplement = {
  contractualTermsSupplementType: {
    description: 'Identifies the form of applicable contractual supplement.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'FgeGQiLz9TJQSYENK3T48kJAnBoypPpJTdxNttHXYVSj',
    },
  },
  description:
    'A contractual supplement (such as those published by ISDA) and its publication date that will apply to the trade.\n',
  name: 'cdm/legaldocumentation/common/ContractualTermsSupplement',
  publicationDate: {
    description:
      'Specifies the publication date of the applicable version of the contractual supplement.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;

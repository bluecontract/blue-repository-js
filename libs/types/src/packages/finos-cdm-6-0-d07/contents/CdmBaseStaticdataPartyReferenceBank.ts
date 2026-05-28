export const CdmBaseStaticdataPartyReferenceBank = {
  description:
    'A class to describe an institution (party) identified by means of a coding scheme and an optional name.',
  name: 'cdm/base/staticdata/party/ReferenceBank',
  referenceBankId: {
    description:
      'An institution (party) identifier, e.g. a bank identifier code (BIC). FpML specifies a referenceBankIdScheme.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  referenceBankName: {
    description:
      'The name of the institution (party). A free format string. FpML does not define usage rules for the element.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;

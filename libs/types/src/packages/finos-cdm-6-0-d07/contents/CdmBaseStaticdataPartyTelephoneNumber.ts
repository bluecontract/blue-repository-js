export const CdmBaseStaticdataPartyTelephoneNumber = {
  description:
    'A class to specify a telephone number as a type of phone number (e.g. work, personal, ...) alongside with the actual number.\n',
  name: 'cdm/base/staticdata/party/TelephoneNumber',
  number: {
    description: 'The actual telephone number.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  telephoneNumberType: {
    description: 'The type of telephone number, e.g. work, mobile.',
    type: {
      blueId: '7baagyYQ5pks4axcyWu1AiqBmHkoMoc6PrF7XpeGCaE3',
    },
  },
} as const;

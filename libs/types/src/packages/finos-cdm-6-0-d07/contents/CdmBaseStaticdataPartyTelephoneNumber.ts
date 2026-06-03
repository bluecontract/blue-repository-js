export const CdmBaseStaticdataPartyTelephoneNumber: Record<string, unknown> = {
  description:
    'A class to specify a telephone number as a type of phone number (e.g. work, personal, ...) alongside with the actual number.\n',
  name: 'cdm/base/staticdata/party/TelephoneNumber',
  number: {
    description: 'The actual telephone number.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  telephoneNumberType: {
    description: 'The type of telephone number, e.g. work, mobile.',
    type: {
      blueId: '7PAPLMPSmka7bG7227fzRv3qSgjt72t52HW5JbZddX1w',
    },
  },
};

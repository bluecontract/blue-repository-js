export const CdmBaseStaticdataPartyNaturalPerson: Record<string, unknown> = {
  contactInformation: {
    description:
      'The contact information for such person, when different from the contact information associated with the party.\n',
    type: {
      blueId: 'AWye6DehLS3vyWXet8adWpUZ8kLZYQCWMkCgEK9CoRSR',
    },
  },
  dateOfBirth: {
    description: "The natural person's date of birth.",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'A class to represent the attributes that are specific to a natural person.',
  firstName: {
    description: "The natural person's first name. It is optional in FpML.",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  honorific: {
    description: 'An honorific title, such as Mr., Ms., Dr. etc.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  initial: {
    description:
      "The natural person's middle initial(s). If a middle initial is provided then a name should be absent.",
    itemType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  middleName: {
    description:
      "The natural person's middle name(s). If a middle name is provided then an initial should be absent.",
    itemType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'cdm/base/staticdata/party/NaturalPerson',
  personId: {
    description:
      'The identifier associated with a person, e.g. the internal identification code.',
    itemType: {
      blueId: 'AG9Tj8KSzAxFp8kXUogfAmWG8bandq6BE1o5iVxrvc3o',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  suffix: {
    description: 'Name suffix, such as Jr., III, etc.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  surname: {
    description: "The natural person's surname.",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};

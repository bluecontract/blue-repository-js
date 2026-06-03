export const CdmBaseStaticdataPartyAddress: Record<string, unknown> = {
  city: {
    description: 'The city component of the postal address.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  country: {
    description:
      'The ISO 3166 standard code for the country within which the postal address is located.',
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  description: 'A class to specify a post or street address.',
  name: 'cdm/base/staticdata/party/Address',
  postalCode: {
    description:
      'The code, required for computerized mail sorting systems, that is allocated to a physical address by a national postal authority.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  state: {
    description:
      'A country subdivision used in postal addresses in some countries. For example, US states, Canadian provinces, Swiss cantons, ...\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  street: {
    description:
      'The set of street and building number information that identifies a postal address within a city.',
    itemType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};

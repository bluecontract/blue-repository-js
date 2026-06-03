export const CdmBaseStaticdataPartyPersonIdentifier: Record<string, unknown> = {
  country: {
    description:
      'The ISO 3166 standard code for the country issuing the identifier.',
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  description:
    'Comprises an identifier and a source. The associated metadata key denotes the ability to associate a hash value to the PersonIdentifier instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.\n',
  identifier: {
    description:
      'Provides an identifier associated with a person. The identifier is unique within the public source specified in the source attribute.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  identifierType: {
    description: 'Defines the source of the identifier.',
    type: {
      blueId: '2DvCCVBpSHMw3EiuFp3MYB9YQpwrSYx4jvwkNtoq3jx9',
    },
  },
  name: 'cdm/base/staticdata/party/PersonIdentifier',
};

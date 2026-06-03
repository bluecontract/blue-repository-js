export const CdmBaseStaticdataPartyPartyIdentifier: Record<string, unknown> = {
  description:
    'Comprises an identifier and a source. The associated metadata key denotes the ability to associate a hash value to the PartyIdentifier instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.\n',
  identifier: {
    description:
      'Provides an identifier associated with a party. The identifier is unique within the public source specified in the source attribute.\n',
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
      blueId: 'JCXuAtNHkVPfjzG8gXbgiwoAYAmMiB2EfaSy8qU3iqtz',
    },
  },
  name: 'cdm/base/staticdata/party/PartyIdentifier',
};

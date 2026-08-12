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
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  identifierType: {
    description: 'Defines the source of the identifier.',
    type: {
      blueId: 'HF2iBeqVB9K52LiqMfKwUtdriqmD7BQiewBjXBWpF763',
    },
  },
  name: 'cdm/base/staticdata/party/PartyIdentifier',
};

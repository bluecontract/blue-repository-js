export const CdmBaseStaticdataPartyPersonIdentifier: Record<string, unknown> = {
  country: {
    description:
      'The ISO 3166 standard code for the country issuing the identifier.',
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
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
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  identifierType: {
    description: 'Defines the source of the identifier.',
    type: {
      blueId: 'BEj7NeQ1KmrSoRpwdQvBz69ovp9genXGJ6mpLGXYYwHz',
    },
  },
  name: 'cdm/base/staticdata/party/PersonIdentifier',
};

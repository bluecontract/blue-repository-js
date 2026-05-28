export const CdmBaseStaticdataPartyPersonIdentifier = {
  country: {
    description:
      'The ISO 3166 standard code for the country issuing the identifier.',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  description:
    'Comprises an identifier and a source. The associated metadata key denotes the ability to associate a hash value to the PersonIdentifier instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.\n',
  identifier: {
    description:
      'Provides an identifier associated with a person. The identifier is unique within the public source specified in the source attribute.\n',
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
  identifierType: {
    description: 'Defines the source of the identifier.',
    type: {
      blueId: 'FMkLv6qXtSm7J9WiqjortpggKS64LbdJJWwyPv81h7V3',
    },
  },
  name: 'cdm/base/staticdata/party/PersonIdentifier',
} as const;

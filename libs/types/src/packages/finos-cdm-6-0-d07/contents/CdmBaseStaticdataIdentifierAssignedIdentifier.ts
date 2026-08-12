export const CdmBaseStaticdataIdentifierAssignedIdentifier: Record<
  string,
  unknown
> = {
  description:
    'A class to specify the identifier value and its associated version.',
  identifier: {
    description: 'The identifier value.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  name: 'cdm/base/staticdata/identifier/AssignedIdentifier',
  version: {
    description:
      'The identifier version, which is specified as an integer and is meant to be incremented each time the transaction terms (whether contract or event) change. This version is made option to support the use case where the identifier is referenced without the version. The constraint that a contract and a lifecycle event need to have an associated version is enforced through data rules.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
};

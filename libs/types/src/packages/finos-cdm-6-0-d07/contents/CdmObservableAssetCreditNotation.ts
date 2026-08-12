export const CdmObservableAssetCreditNotation: Record<string, unknown> = {
  agency: {
    description:
      'Specifies The credit agency to which the other variables (notation, scale, debt type) refer to.',
    schema: {
      required: true,
    },
    type: {
      blueId: '21xGvoNnChKXaDXVNTEgYY1eJr849T5okU3aXsrCK2PB',
    },
  },
  creditWatch: {
    description:
      'Indicates the potential direction of a short-term or long-term rating. It focuses on identifiable events and short-term trends that cause ratings to be placed under special surveillance.\n',
    type: {
      blueId: 'JThRKhD8L54T86NmWrx4tHJzMADkizJKjgcXZ5RD4nD',
    },
  },
  debt: {
    description:
      'Specifies the credit rating debt type (e.g. long term, high yield, deposits, ...) associated with the credit rating notation and scale.\n',
    type: {
      blueId: 'FXnC4V44iMPEEzRCuT7HaZPV6oQyrxYFSjNtrrkjZNFw',
    },
  },
  description:
    'Represents a class to specify the credit notation as the combination of agency, notation, scale and debt type qualifications.\n',
  name: 'cdm/observable/asset/CreditNotation',
  notation: {
    description:
      "Specifies The credit rating notation. As it varies among credit rating agencies, FpML doesn't specify a default scheme.\n",
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  outlook: {
    description:
      'Assesses the potential direction of a long-term credit rating over the intermediate term, which is generally up to two years for investment grade and generally up to one year for speculative grade.\n',
    type: {
      blueId: 'FLbsfWVvon28TN6JNLV3VmaXBVpm92Ar9W9hNpmPsFn7',
    },
  },
  scale: {
    description:
      "Specifies the credit rating scale, with a typical distinction between short term, long term. FpML doesn't specify a default scheme, which is hence not specified as an enumeration as part of the CDM.\n",
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
};

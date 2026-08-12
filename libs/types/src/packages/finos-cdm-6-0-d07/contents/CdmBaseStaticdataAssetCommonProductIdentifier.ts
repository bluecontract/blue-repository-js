export const CdmBaseStaticdataAssetCommonProductIdentifier: Record<
  string,
  unknown
> = {
  description:
    'Comprises an identifier and a source. The associated metadata key denotes the ability to associate a hash value to the ProductIdentifier instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.\n',
  identifier: {
    description:
      'Provides an identifier associated with a specific product.  The identifier is unique within the public source specified in the source attribute.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  name: 'cdm/base/staticdata/asset/common/ProductIdentifier',
  source: {
    description: 'Defines the source of the identifier.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HbfxwN6HWKa7Na2KKhwUNb3q2x3YJi6VaC29NcUEsdSB',
    },
  },
};

export const CdmProductAssetBasketReferenceInformation: Record<
  string,
  unknown
> = {
  basketId: {
    description: 'A CDS basket identifier.',
    itemType: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  basketName: {
    description:
      'The name of the basket expressed as a free format string. FpML does not define usage rules for this element.',
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  description: 'CDS Basket Reference Information.',
  mthToDefault: {
    description:
      'M th reference obligation to default to allow representation of N th to M th defaults.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  name: 'cdm/product/asset/BasketReferenceInformation',
  nthToDefault: {
    description: 'N th reference obligation to default triggers payout.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  referencePool: {
    description:
      'This element contains all the reference pool items to define the reference entity and reference obligation(s) in the basket.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '3ovMWZG1vkBZmE3FHeEHCtXaBPGJ8RUhfdw6Jryv8j4H',
    },
  },
  tranche: {
    description: 'This element contains CDS tranche terms.',
    type: {
      blueId: '2kqSEBf4QHUaZoidcqZix27rUgz9zA4zq7QJaUj5s5Mh',
    },
  },
};

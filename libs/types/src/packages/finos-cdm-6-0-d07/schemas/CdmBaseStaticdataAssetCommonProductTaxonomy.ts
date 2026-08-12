import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnum';
import { CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema } from './CdmBaseStaticdataAssetCommonTaxonomySourceEnum';
import { CdmBaseStaticdataAssetCommonTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonTaxonomyValue';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonProductTaxonomySchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/ProductTaxonomy'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      primaryAssetClass: zod
        .lazy(
          () => CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema
        )
        .optional(),
      productQualifier: zod.string().optional(),
      secondaryAssetClass: zod
        .array(
          zod.lazy(
            () => CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema
          )
        )
        .min(0)
        .optional(),
      source: zod
        .lazy(() => CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema)
        .optional(),
      val: zod
        .lazy(() => CdmBaseStaticdataAssetCommonTaxonomyValueSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonProductTaxonomy = z.infer<
  typeof CdmBaseStaticdataAssetCommonProductTaxonomySchema
>;

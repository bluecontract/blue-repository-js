import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnum';
import { CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema } from './CdmBaseStaticdataAssetCommonTaxonomySourceEnum';
import { CdmBaseStaticdataAssetCommonTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonTaxonomyValue';

export const CdmBaseStaticdataAssetCommonProductTaxonomySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/ProductTaxonomy'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      primaryAssetClass: z
        .lazy(
          () => CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema
        )
        .optional(),
      productQualifier: z.string().optional(),
      secondaryAssetClass: z
        .array(
          z.lazy(
            () => CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema
          )
        )
        .min(0)
        .optional(),
      source: z
        .lazy(() => CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema)
        .optional(),
      val: z
        .lazy(() => CdmBaseStaticdataAssetCommonTaxonomyValueSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonProductTaxonomy = z.infer<
  typeof CdmBaseStaticdataAssetCommonProductTaxonomySchema
>;

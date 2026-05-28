import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema } from './CdmBaseStaticdataAssetCommonTaxonomySourceEnum';
import { CdmBaseStaticdataAssetCommonTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonTaxonomyValue';

export const CdmBaseStaticdataAssetCommonTaxonomySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/Taxonomy']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      source: z
        .lazy(() => CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema)
        .optional(),
      val: z
        .lazy(() => CdmBaseStaticdataAssetCommonTaxonomyValueSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonTaxonomy = z.infer<
  typeof CdmBaseStaticdataAssetCommonTaxonomySchema
>;

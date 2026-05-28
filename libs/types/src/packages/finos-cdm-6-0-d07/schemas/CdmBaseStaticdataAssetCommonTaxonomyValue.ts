import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema } from './CdmBaseStaticdataAssetCommonTaxonomyClassification';

export const CdmBaseStaticdataAssetCommonTaxonomyValueSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/TaxonomyValue']
  )(
    z.object({
      classification: z
        .array(
          z.lazy(() => CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema)
        )
        .min(0)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonTaxonomyValue = z.infer<
  typeof CdmBaseStaticdataAssetCommonTaxonomyValueSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/TaxonomyClassification'
    ]
  )(
    z.object({
      className: z.string().optional(),
      name: z.string().optional(),
      ordinal: z.number().optional(),
      val: z.string(),
    })
  );

export type CdmBaseStaticdataAssetCommonTaxonomyClassification = z.infer<
  typeof CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema
>;

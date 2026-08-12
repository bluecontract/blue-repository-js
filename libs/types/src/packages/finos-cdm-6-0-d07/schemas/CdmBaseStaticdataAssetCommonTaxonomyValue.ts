import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema } from './CdmBaseStaticdataAssetCommonTaxonomyClassification';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonTaxonomyValueSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/TaxonomyValue']
  )(
    zod.object({
      classification: zod
        .array(
          zod.lazy(
            () => CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema
          )
        )
        .min(0)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonTaxonomyValue = z.infer<
  typeof CdmBaseStaticdataAssetCommonTaxonomyValueSchema
>;

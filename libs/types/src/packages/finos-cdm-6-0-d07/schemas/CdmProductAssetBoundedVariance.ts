import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetRealisedVarianceMethodEnumSchema } from './CdmProductAssetRealisedVarianceMethodEnum';

export const CdmProductAssetBoundedVarianceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/BoundedVariance']
  )(
    z.object({
      daysInRangeAdjustment: z.boolean(),
      lowerBarrier: z.number().optional(),
      name: z.string().optional(),
      realisedVarianceMethod: z.lazy(
        () => CdmProductAssetRealisedVarianceMethodEnumSchema
      ),
      upperBarrier: z.number().optional(),
    })
  );

export type CdmProductAssetBoundedVariance = z.infer<
  typeof CdmProductAssetBoundedVarianceSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetBoundedVarianceSchema } from './CdmProductAssetBoundedVariance';

export const CdmProductAssetVarianceCapFloorSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/VarianceCapFloor']
  )(
    z.object({
      boundedVariance: z
        .lazy(() => CdmProductAssetBoundedVarianceSchema)
        .optional(),
      name: z.string().optional(),
      unadjustedVarianceCap: z.number().optional(),
      varianceCap: z.boolean(),
    })
  );

export type CdmProductAssetVarianceCapFloor = z.infer<
  typeof CdmProductAssetVarianceCapFloorSchema
>;

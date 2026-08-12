import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetBoundedVarianceSchema } from './CdmProductAssetBoundedVariance';

const zod = z as any;

export const CdmProductAssetVarianceCapFloorSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/VarianceCapFloor']
)(
  zod.object({
    boundedVariance: zod
      .lazy(() => CdmProductAssetBoundedVarianceSchema)
      .optional(),
    name: zod.string().optional(),
    unadjustedVarianceCap: zod.number().optional(),
    varianceCap: zod.boolean(),
  })
);

export type CdmProductAssetVarianceCapFloor = z.infer<
  typeof CdmProductAssetVarianceCapFloorSchema
>;

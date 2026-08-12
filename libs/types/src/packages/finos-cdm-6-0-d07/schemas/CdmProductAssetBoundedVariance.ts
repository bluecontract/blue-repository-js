import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetRealisedVarianceMethodEnumSchema } from './CdmProductAssetRealisedVarianceMethodEnum';

const zod = z as any;

export const CdmProductAssetBoundedVarianceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/BoundedVariance']
)(
  zod.object({
    daysInRangeAdjustment: zod.boolean(),
    lowerBarrier: zod.number().optional(),
    name: zod.string().optional(),
    realisedVarianceMethod: zod.lazy(
      () => CdmProductAssetRealisedVarianceMethodEnumSchema
    ),
    upperBarrier: zod.number().optional(),
  })
);

export type CdmProductAssetBoundedVariance = z.infer<
  typeof CdmProductAssetBoundedVarianceSchema
>;

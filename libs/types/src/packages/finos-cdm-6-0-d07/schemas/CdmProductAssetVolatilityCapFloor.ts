import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetVolatilityCapFloorSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/VolatilityCapFloor']
)(
  zod.object({
    applicable: zod.boolean(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    totalVolatilityCap: zod.number().optional(),
    volatilityCapFactor: zod.number().optional(),
  })
);

export type CdmProductAssetVolatilityCapFloor = z.infer<
  typeof CdmProductAssetVolatilityCapFloorSchema
>;

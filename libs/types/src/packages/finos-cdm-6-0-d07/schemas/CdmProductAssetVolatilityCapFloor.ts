import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetVolatilityCapFloorSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/VolatilityCapFloor']
  )(
    z.object({
      applicable: z.boolean(),
      description: z.string().optional(),
      name: z.string().optional(),
      totalVolatilityCap: z.number().optional(),
      volatilityCapFactor: z.number().optional(),
    })
  );

export type CdmProductAssetVolatilityCapFloor = z.infer<
  typeof CdmProductAssetVolatilityCapFloorSchema
>;

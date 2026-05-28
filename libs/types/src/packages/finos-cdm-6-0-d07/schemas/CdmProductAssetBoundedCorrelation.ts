import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetBoundedCorrelationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/BoundedCorrelation']
  )(
    z.object({
      description: z.string().optional(),
      maximumBoundaryPercent: z.number().optional(),
      minimumBoundaryPercent: z.number().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductAssetBoundedCorrelation = z.infer<
  typeof CdmProductAssetBoundedCorrelationSchema
>;

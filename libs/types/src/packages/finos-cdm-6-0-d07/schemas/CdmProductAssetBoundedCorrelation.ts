import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetBoundedCorrelationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/BoundedCorrelation']
)(
  zod.object({
    description: zod.string().optional(),
    maximumBoundaryPercent: zod.number().optional(),
    minimumBoundaryPercent: zod.number().optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductAssetBoundedCorrelation = z.infer<
  typeof CdmProductAssetBoundedCorrelationSchema
>;

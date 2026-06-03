import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetReferencePoolItemSchema } from './CdmProductAssetReferencePoolItem';

const zod = z as any;

export const CdmProductAssetReferencePoolSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ReferencePool']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    referencePoolItem: zod
      .array(zod.lazy(() => CdmProductAssetReferencePoolItemSchema))
      .min(1)
      .optional(),
  })
);

export type CdmProductAssetReferencePool = z.infer<
  typeof CdmProductAssetReferencePoolSchema
>;

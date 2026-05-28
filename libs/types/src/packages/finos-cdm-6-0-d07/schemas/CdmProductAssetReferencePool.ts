import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetReferencePoolItemSchema } from './CdmProductAssetReferencePoolItem';

export const CdmProductAssetReferencePoolSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ReferencePool']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    referencePoolItem: z
      .array(z.lazy(() => CdmProductAssetReferencePoolItemSchema))
      .min(1)
      .optional(),
  })
);

export type CdmProductAssetReferencePool = z.infer<
  typeof CdmProductAssetReferencePoolSchema
>;

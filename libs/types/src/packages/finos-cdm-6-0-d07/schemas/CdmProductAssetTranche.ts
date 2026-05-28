import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetTrancheSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/Tranche']
)(
  z.object({
    attachmentPoint: z.number(),
    description: z.string().optional(),
    exhaustionPoint: z.number(),
    incurredRecoveryApplicable: z.boolean().optional(),
    name: z.string().optional(),
  })
);

export type CdmProductAssetTranche = z.infer<
  typeof CdmProductAssetTrancheSchema
>;

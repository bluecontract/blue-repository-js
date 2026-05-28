import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetFloatingAmountProvisionsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FloatingAmountProvisions']
  )(
    z.object({
      name: z.string().optional(),
      stepUpProvision: z.boolean().optional(),
      wacCapInterestProvision: z.boolean().optional(),
    })
  );

export type CdmProductAssetFloatingAmountProvisions = z.infer<
  typeof CdmProductAssetFloatingAmountProvisionsSchema
>;

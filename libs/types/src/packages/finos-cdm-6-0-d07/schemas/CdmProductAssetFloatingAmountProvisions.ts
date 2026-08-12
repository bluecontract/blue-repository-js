import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetFloatingAmountProvisionsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FloatingAmountProvisions']
  )(
    zod.object({
      name: zod.string().optional(),
      stepUpProvision: zod.boolean().optional(),
      wacCapInterestProvision: zod.boolean().optional(),
    })
  );

export type CdmProductAssetFloatingAmountProvisions = z.infer<
  typeof CdmProductAssetFloatingAmountProvisionsSchema
>;

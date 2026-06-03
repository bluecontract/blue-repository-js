import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetTrancheSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/Tranche']
)(
  zod.object({
    attachmentPoint: zod.number(),
    description: zod.string().optional(),
    exhaustionPoint: zod.number(),
    incurredRecoveryApplicable: zod.boolean().optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductAssetTranche = z.infer<
  typeof CdmProductAssetTrancheSchema
>;

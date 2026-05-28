import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetAssetDeliveryProfileSchema } from './CdmProductAssetAssetDeliveryProfile';

export const CdmProductAssetAssetDeliveryPeriodsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/AssetDeliveryPeriods']
  )(
    z.object({
      description: z.string().optional(),
      endDate: z.string().optional(),
      name: z.string().optional(),
      profile: z
        .array(z.lazy(() => CdmProductAssetAssetDeliveryProfileSchema))
        .min(0)
        .optional(),
      startDate: z.string().optional(),
    })
  );

export type CdmProductAssetAssetDeliveryPeriods = z.infer<
  typeof CdmProductAssetAssetDeliveryPeriodsSchema
>;

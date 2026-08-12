import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetAssetDeliveryProfileSchema } from './CdmProductAssetAssetDeliveryProfile';

const zod = z as any;

export const CdmProductAssetAssetDeliveryPeriodsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/AssetDeliveryPeriods']
)(
  zod.object({
    description: zod.string().optional(),
    endDate: zod.string().optional(),
    name: zod.string().optional(),
    profile: zod
      .array(zod.lazy(() => CdmProductAssetAssetDeliveryProfileSchema))
      .min(0)
      .optional(),
    startDate: zod.string().optional(),
  })
);

export type CdmProductAssetAssetDeliveryPeriods = z.infer<
  typeof CdmProductAssetAssetDeliveryPeriodsSchema
>;

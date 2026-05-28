import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeDayOfWeekEnumSchema } from './CdmBaseDatetimeDayOfWeekEnum';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';

export const CdmProductAssetAssetDeliveryProfileBlockSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/AssetDeliveryProfileBlock']
  )(
    z.object({
      dayOfWeek: z
        .array(z.lazy(() => CdmBaseDatetimeDayOfWeekEnumSchema))
        .min(0)
        .max(7)
        .optional(),
      deliveryCapacity: z.lazy(() => CdmBaseMathQuantitySchema).optional(),
      description: z.string().optional(),
      endTime: z.string().optional(),
      name: z.string().optional(),
      priceTimeIntervalQuantity: z
        .lazy(() => CdmObservableAssetPriceSchema)
        .optional(),
      startTime: z.string().optional(),
    })
  );

export type CdmProductAssetAssetDeliveryProfileBlock = z.infer<
  typeof CdmProductAssetAssetDeliveryProfileBlockSchema
>;

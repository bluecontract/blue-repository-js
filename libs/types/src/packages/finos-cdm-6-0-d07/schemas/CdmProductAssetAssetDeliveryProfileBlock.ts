import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeDayOfWeekEnumSchema } from './CdmBaseDatetimeDayOfWeekEnum';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';

const zod = z as any;

export const CdmProductAssetAssetDeliveryProfileBlockSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/AssetDeliveryProfileBlock']
  )(
    zod.object({
      dayOfWeek: zod
        .array(zod.lazy(() => CdmBaseDatetimeDayOfWeekEnumSchema))
        .min(0)
        .max(7)
        .optional(),
      deliveryCapacity: zod.lazy(() => CdmBaseMathQuantitySchema).optional(),
      description: zod.string().optional(),
      endTime: zod.string().optional(),
      name: zod.string().optional(),
      priceTimeIntervalQuantity: zod
        .lazy(() => CdmObservableAssetPriceSchema)
        .optional(),
      startTime: zod.string().optional(),
    })
  );

export type CdmProductAssetAssetDeliveryProfileBlock = z.infer<
  typeof CdmProductAssetAssetDeliveryProfileBlockSchema
>;

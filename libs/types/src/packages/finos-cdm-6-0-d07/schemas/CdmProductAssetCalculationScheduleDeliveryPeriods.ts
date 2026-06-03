import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmProductAssetAssetDeliveryProfileSchema } from './CdmProductAssetAssetDeliveryProfile';

const zod = z as any;

export const CdmProductAssetCalculationScheduleDeliveryPeriodsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/CalculationScheduleDeliveryPeriods'
    ]
  )(
    zod.object({
      deliveryCapacity: zod.lazy(() => CdmBaseMathQuantitySchema).optional(),
      description: zod.string().optional(),
      endDate: zod.string().optional(),
      name: zod.string().optional(),
      priceTimeIntervalQuantity: zod
        .lazy(() => CdmObservableAssetPriceSchema)
        .optional(),
      profile: zod
        .array(zod.lazy(() => CdmProductAssetAssetDeliveryProfileSchema))
        .min(0)
        .optional(),
      startDate: zod.string().optional(),
    })
  );

export type CdmProductAssetCalculationScheduleDeliveryPeriods = z.infer<
  typeof CdmProductAssetCalculationScheduleDeliveryPeriodsSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmProductAssetAssetDeliveryProfileSchema } from './CdmProductAssetAssetDeliveryProfile';

export const CdmProductAssetCalculationScheduleDeliveryPeriodsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/CalculationScheduleDeliveryPeriods'
    ]
  )(
    z.object({
      deliveryCapacity: z.lazy(() => CdmBaseMathQuantitySchema).optional(),
      description: z.string().optional(),
      endDate: z.string().optional(),
      name: z.string().optional(),
      priceTimeIntervalQuantity: z
        .lazy(() => CdmObservableAssetPriceSchema)
        .optional(),
      profile: z
        .array(z.lazy(() => CdmProductAssetAssetDeliveryProfileSchema))
        .min(0)
        .optional(),
      startDate: z.string().optional(),
    })
  );

export type CdmProductAssetCalculationScheduleDeliveryPeriods = z.infer<
  typeof CdmProductAssetCalculationScheduleDeliveryPeriodsSchema
>;

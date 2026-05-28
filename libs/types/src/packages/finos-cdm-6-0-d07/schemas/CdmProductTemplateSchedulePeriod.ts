import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeDateRangeSchema } from './CdmBaseDatetimeDateRange';
import { CdmProductAssetCalculationScheduleDeliveryPeriodsSchema } from './CdmProductAssetCalculationScheduleDeliveryPeriods';

export const CdmProductTemplateSchedulePeriodSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/SchedulePeriod']
  )(
    z.object({
      calculationPeriod: z.lazy(() => CdmBaseDatetimeDateRangeSchema),
      deliveryPeriod: z
        .lazy(() => CdmProductAssetCalculationScheduleDeliveryPeriodsSchema)
        .optional(),
      description: z.string().optional(),
      fixingPeriod: z.lazy(() => CdmBaseDatetimeDateRangeSchema),
      name: z.string().optional(),
      paymentDate: z.string(),
    })
  );

export type CdmProductTemplateSchedulePeriod = z.infer<
  typeof CdmProductTemplateSchedulePeriodSchema
>;

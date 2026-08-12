import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeDateRangeSchema } from './CdmBaseDatetimeDateRange';
import { CdmProductAssetCalculationScheduleDeliveryPeriodsSchema } from './CdmProductAssetCalculationScheduleDeliveryPeriods';

const zod = z as any;

export const CdmProductTemplateSchedulePeriodSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/SchedulePeriod']
)(
  zod.object({
    calculationPeriod: zod.lazy(() => CdmBaseDatetimeDateRangeSchema),
    deliveryPeriod: zod
      .lazy(() => CdmProductAssetCalculationScheduleDeliveryPeriodsSchema)
      .optional(),
    description: zod.string().optional(),
    fixingPeriod: zod.lazy(() => CdmBaseDatetimeDateRangeSchema),
    name: zod.string().optional(),
    paymentDate: zod.string(),
  })
);

export type CdmProductTemplateSchedulePeriod = z.infer<
  typeof CdmProductTemplateSchedulePeriodSchema
>;

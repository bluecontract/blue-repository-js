import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmBaseDatetimeDayOfWeekEnumSchema } from './CdmBaseDatetimeDayOfWeekEnum';
import { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';
import { CdmProductAssetDayDistributionEnumSchema } from './CdmProductAssetDayDistributionEnum';
import { CdmProductCommonScheduleLagSchema } from './CdmProductCommonScheduleLag';

export const CdmProductCommonScheduleParametricDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ParametricDates']
  )(
    z.object({
      businessCenters: z.lazy(() => CdmBaseDatetimeBusinessCentersSchema),
      dayDistribution: z
        .lazy(() => CdmProductAssetDayDistributionEnumSchema)
        .optional(),
      dayFrequency: z.number().optional(),
      dayOfWeek: z
        .array(z.lazy(() => CdmBaseDatetimeDayOfWeekEnumSchema))
        .min(0)
        .max(7)
        .optional(),
      dayType: z.lazy(() => CdmBaseDatetimeDayTypeEnumSchema),
      description: z.string().optional(),
      lag: z.lazy(() => CdmProductCommonScheduleLagSchema).optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCommonScheduleParametricDates = z.infer<
  typeof CdmProductCommonScheduleParametricDatesSchema
>;

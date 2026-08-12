import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmBaseDatetimeDayOfWeekEnumSchema } from './CdmBaseDatetimeDayOfWeekEnum';
import { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';
import { CdmProductAssetDayDistributionEnumSchema } from './CdmProductAssetDayDistributionEnum';
import { CdmProductCommonScheduleLagSchema } from './CdmProductCommonScheduleLag';

const zod = z as any;

export const CdmProductCommonScheduleParametricDatesSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ParametricDates']
  )(
    zod.object({
      businessCenters: zod.lazy(() => CdmBaseDatetimeBusinessCentersSchema),
      dayDistribution: zod
        .lazy(() => CdmProductAssetDayDistributionEnumSchema)
        .optional(),
      dayFrequency: zod.number().optional(),
      dayOfWeek: zod
        .array(zod.lazy(() => CdmBaseDatetimeDayOfWeekEnumSchema))
        .min(0)
        .max(7)
        .optional(),
      dayType: zod.lazy(() => CdmBaseDatetimeDayTypeEnumSchema),
      description: zod.string().optional(),
      lag: zod.lazy(() => CdmProductCommonScheduleLagSchema).optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCommonScheduleParametricDates = z.infer<
  typeof CdmProductCommonScheduleParametricDatesSchema
>;

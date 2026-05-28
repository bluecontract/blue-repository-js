import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAveragingScheduleSchema } from './CdmBaseDatetimeAveragingSchedule';
import { CdmBaseDatetimeDateTimeListSchema } from './CdmBaseDatetimeDateTimeList';
import { CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema } from './CdmObservableEventFieldWithMetaMarketDisruptionEnum';
import { CdmProductCommonScheduleAveragingObservationListSchema } from './CdmProductCommonScheduleAveragingObservationList';

export const CdmProductCommonScheduleAveragingPeriodSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/AveragingPeriod']
  )(
    z.object({
      averagingDateTimes: z
        .lazy(() => CdmBaseDatetimeDateTimeListSchema)
        .optional(),
      averagingObservations: z
        .lazy(() => CdmProductCommonScheduleAveragingObservationListSchema)
        .optional(),
      description: z.string().optional(),
      marketDisruption: z
        .lazy(() => CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema)
        .optional(),
      name: z.string().optional(),
      schedule: z
        .array(z.lazy(() => CdmBaseDatetimeAveragingScheduleSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmProductCommonScheduleAveragingPeriod = z.infer<
  typeof CdmProductCommonScheduleAveragingPeriodSchema
>;

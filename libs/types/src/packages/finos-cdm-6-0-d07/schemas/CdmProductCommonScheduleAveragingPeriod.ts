import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAveragingScheduleSchema } from './CdmBaseDatetimeAveragingSchedule';
import { CdmBaseDatetimeDateTimeListSchema } from './CdmBaseDatetimeDateTimeList';
import { CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema } from './CdmObservableEventFieldWithMetaMarketDisruptionEnum';
import { CdmProductCommonScheduleAveragingObservationListSchema } from './CdmProductCommonScheduleAveragingObservationList';

const zod = z as any;

export const CdmProductCommonScheduleAveragingPeriodSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/AveragingPeriod']
  )(
    zod.object({
      averagingDateTimes: zod
        .lazy(() => CdmBaseDatetimeDateTimeListSchema)
        .optional(),
      averagingObservations: zod
        .lazy(() => CdmProductCommonScheduleAveragingObservationListSchema)
        .optional(),
      description: zod.string().optional(),
      marketDisruption: zod
        .lazy(() => CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema)
        .optional(),
      name: zod.string().optional(),
      schedule: zod
        .array(zod.lazy(() => CdmBaseDatetimeAveragingScheduleSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmProductCommonScheduleAveragingPeriod = z.infer<
  typeof CdmProductCommonScheduleAveragingPeriodSchema
>;

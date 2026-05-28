import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeCalculationPeriodFrequencySchema } from './CdmBaseDatetimeCalculationPeriodFrequency';

export const CdmBaseDatetimeAveragingScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/AveragingSchedule']
  )(
    z.object({
      averagingPeriodFrequency: z.lazy(
        () => CdmBaseDatetimeCalculationPeriodFrequencySchema
      ),
      description: z.string().optional(),
      endDate: z.string(),
      name: z.string().optional(),
      startDate: z.string(),
    })
  );

export type CdmBaseDatetimeAveragingSchedule = z.infer<
  typeof CdmBaseDatetimeAveragingScheduleSchema
>;

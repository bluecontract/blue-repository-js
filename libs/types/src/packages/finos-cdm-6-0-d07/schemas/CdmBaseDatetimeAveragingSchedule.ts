import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeCalculationPeriodFrequencySchema } from './CdmBaseDatetimeCalculationPeriodFrequency';

const zod = z as any;

export const CdmBaseDatetimeAveragingScheduleSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/AveragingSchedule']
)(
  zod.object({
    averagingPeriodFrequency: zod.lazy(
      () => CdmBaseDatetimeCalculationPeriodFrequencySchema
    ),
    description: zod.string().optional(),
    endDate: zod.string(),
    name: zod.string().optional(),
    startDate: zod.string(),
  })
);

export type CdmBaseDatetimeAveragingSchedule = z.infer<
  typeof CdmBaseDatetimeAveragingScheduleSchema
>;

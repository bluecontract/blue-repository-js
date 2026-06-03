import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmBaseDatetimeDayOfWeekEnumSchema } from './CdmBaseDatetimeDayOfWeekEnum';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';

const zod = z as any;

export const CdmBaseDatetimeCalculationFrequencySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/CalculationFrequency']
)(
  zod.object({
    businessCenter: zod
      .array(zod.lazy(() => CdmBaseDatetimeBusinessCenterEnumSchema))
      .min(0)
      .optional(),
    dateLocation: zod.lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema),
    dayOfMonth: zod.number().optional(),
    dayOfWeek: zod.lazy(() => CdmBaseDatetimeDayOfWeekEnumSchema).optional(),
    description: zod.string().optional(),
    monthOfYear: zod.number().optional(),
    name: zod.string().optional(),
    offsetDays: zod.number(),
    period: zod.lazy(() => CdmBaseDatetimePeriodSchema),
    weekOfMonth: zod.number().optional(),
  })
);

export type CdmBaseDatetimeCalculationFrequency = z.infer<
  typeof CdmBaseDatetimeCalculationFrequencySchema
>;

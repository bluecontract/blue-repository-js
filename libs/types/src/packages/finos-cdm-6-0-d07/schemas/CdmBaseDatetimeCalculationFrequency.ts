import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmBaseDatetimeDayOfWeekEnumSchema } from './CdmBaseDatetimeDayOfWeekEnum';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';

export const CdmBaseDatetimeCalculationFrequencySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/CalculationFrequency']
  )(
    z.object({
      businessCenter: z
        .array(z.lazy(() => CdmBaseDatetimeBusinessCenterEnumSchema))
        .min(0)
        .optional(),
      dateLocation: z.lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema),
      dayOfMonth: z.number().optional(),
      dayOfWeek: z.lazy(() => CdmBaseDatetimeDayOfWeekEnumSchema).optional(),
      description: z.string().optional(),
      monthOfYear: z.number().optional(),
      name: z.string().optional(),
      offsetDays: z.number(),
      period: z.lazy(() => CdmBaseDatetimePeriodSchema),
      weekOfMonth: z.number().optional(),
    })
  );

export type CdmBaseDatetimeCalculationFrequency = z.infer<
  typeof CdmBaseDatetimeCalculationFrequencySchema
>;

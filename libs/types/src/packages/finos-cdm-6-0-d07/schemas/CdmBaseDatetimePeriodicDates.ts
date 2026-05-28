import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeCalculationPeriodFrequencySchema } from './CdmBaseDatetimeCalculationPeriodFrequency';
import { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';

export const CdmBaseDatetimePeriodicDatesSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/PeriodicDates']
)(
  z.object({
    dayType: z.lazy(() => CdmBaseDatetimeDayTypeEnumSchema).optional(),
    description: z.string().optional(),
    endDate: z
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
    name: z.string().optional(),
    periodDatesAdjustments: z
      .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
      .optional(),
    periodFrequency: z
      .lazy(() => CdmBaseDatetimeCalculationPeriodFrequencySchema)
      .optional(),
    startDate: z
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
  })
);

export type CdmBaseDatetimePeriodicDates = z.infer<
  typeof CdmBaseDatetimePeriodicDatesSchema
>;

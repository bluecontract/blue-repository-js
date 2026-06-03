import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeCalculationPeriodFrequencySchema } from './CdmBaseDatetimeCalculationPeriodFrequency';
import { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';

const zod = z as any;

export const CdmBaseDatetimePeriodicDatesSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/PeriodicDates']
)(
  zod.object({
    dayType: zod.lazy(() => CdmBaseDatetimeDayTypeEnumSchema).optional(),
    description: zod.string().optional(),
    endDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
    name: zod.string().optional(),
    periodDatesAdjustments: zod
      .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
      .optional(),
    periodFrequency: zod
      .lazy(() => CdmBaseDatetimeCalculationPeriodFrequencySchema)
      .optional(),
    startDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
  })
);

export type CdmBaseDatetimePeriodicDates = z.infer<
  typeof CdmBaseDatetimePeriodicDatesSchema
>;

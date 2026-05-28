import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeCalculationPeriodFrequencySchema } from './CdmBaseDatetimeCalculationPeriodFrequency';
import { CdmProductCommonScheduleStubPeriodTypeEnumSchema } from './CdmProductCommonScheduleStubPeriodTypeEnum';

export const CdmProductCommonScheduleCalculationPeriodDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/CalculationPeriodDates'
    ]
  )(
    z.object({
      calculationPeriodDatesAdjustments: z
        .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
        .optional(),
      calculationPeriodFrequency: z
        .lazy(() => CdmBaseDatetimeCalculationPeriodFrequencySchema)
        .optional(),
      description: z.string().optional(),
      effectiveDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      firstCompoundingPeriodEndDate: z.string().optional(),
      firstPeriodStartDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      firstRegularPeriodStartDate: z.string().optional(),
      lastRegularPeriodEndDate: z.string().optional(),
      name: z.string().optional(),
      stubPeriodType: z
        .lazy(() => CdmProductCommonScheduleStubPeriodTypeEnumSchema)
        .optional(),
      terminationDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
    })
  );

export type CdmProductCommonScheduleCalculationPeriodDates = z.infer<
  typeof CdmProductCommonScheduleCalculationPeriodDatesSchema
>;

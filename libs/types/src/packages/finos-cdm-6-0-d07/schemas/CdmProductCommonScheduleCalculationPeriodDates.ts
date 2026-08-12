import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeCalculationPeriodFrequencySchema } from './CdmBaseDatetimeCalculationPeriodFrequency';
import { CdmProductCommonScheduleStubPeriodTypeEnumSchema } from './CdmProductCommonScheduleStubPeriodTypeEnum';

const zod = z as any;

export const CdmProductCommonScheduleCalculationPeriodDatesSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/CalculationPeriodDates'
    ]
  )(
    zod.object({
      calculationPeriodDatesAdjustments: zod
        .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
        .optional(),
      calculationPeriodFrequency: zod
        .lazy(() => CdmBaseDatetimeCalculationPeriodFrequencySchema)
        .optional(),
      description: zod.string().optional(),
      effectiveDate: zod
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      firstCompoundingPeriodEndDate: zod.string().optional(),
      firstPeriodStartDate: zod
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      firstRegularPeriodStartDate: zod.string().optional(),
      lastRegularPeriodEndDate: zod.string().optional(),
      name: zod.string().optional(),
      stubPeriodType: zod
        .lazy(() => CdmProductCommonScheduleStubPeriodTypeEnumSchema)
        .optional(),
      terminationDate: zod
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
    })
  );

export type CdmProductCommonScheduleCalculationPeriodDates = z.infer<
  typeof CdmProductCommonScheduleCalculationPeriodDatesSchema
>;

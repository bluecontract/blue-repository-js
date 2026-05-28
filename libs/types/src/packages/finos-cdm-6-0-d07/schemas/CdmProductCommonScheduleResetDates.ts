import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmProductCommonScheduleInitialFixingDateSchema } from './CdmProductCommonScheduleInitialFixingDate';
import { CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDates';
import { CdmProductCommonScheduleResetFrequencySchema } from './CdmProductCommonScheduleResetFrequency';
import { CdmProductCommonScheduleResetRelativeToEnumSchema } from './CdmProductCommonScheduleResetRelativeToEnum';

export const CdmProductCommonScheduleResetDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ResetDates']
  )(
    z.object({
      calculationPeriodDatesReference: z
        .lazy(
          () =>
            CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema
        )
        .optional(),
      description: z.string().optional(),
      finalFixingDate: z
        .lazy(() => CdmBaseDatetimeAdjustableDateSchema)
        .optional(),
      fixingDates: z
        .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
        .optional(),
      initialFixingDate: z
        .lazy(() => CdmProductCommonScheduleInitialFixingDateSchema)
        .optional(),
      name: z.string().optional(),
      rateCutOffDaysOffset: z
        .lazy(() => CdmBaseDatetimeOffsetSchema)
        .optional(),
      resetDatesAdjustments: z
        .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
        .optional(),
      resetFrequency: z
        .lazy(() => CdmProductCommonScheduleResetFrequencySchema)
        .optional(),
      resetRelativeTo: z
        .lazy(() => CdmProductCommonScheduleResetRelativeToEnumSchema)
        .optional(),
    })
  );

export type CdmProductCommonScheduleResetDates = z.infer<
  typeof CdmProductCommonScheduleResetDatesSchema
>;

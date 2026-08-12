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

const zod = z as any;

export const CdmProductCommonScheduleResetDatesSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ResetDates']
)(
  zod.object({
    calculationPeriodDatesReference: zod
      .lazy(
        () =>
          CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema
      )
      .optional(),
    description: zod.string().optional(),
    finalFixingDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableDateSchema)
      .optional(),
    fixingDates: zod
      .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
      .optional(),
    initialFixingDate: zod
      .lazy(() => CdmProductCommonScheduleInitialFixingDateSchema)
      .optional(),
    name: zod.string().optional(),
    rateCutOffDaysOffset: zod
      .lazy(() => CdmBaseDatetimeOffsetSchema)
      .optional(),
    resetDatesAdjustments: zod
      .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
      .optional(),
    resetFrequency: zod
      .lazy(() => CdmProductCommonScheduleResetFrequencySchema)
      .optional(),
    resetRelativeTo: zod
      .lazy(() => CdmProductCommonScheduleResetRelativeToEnumSchema)
      .optional(),
  })
);

export type CdmProductCommonScheduleResetDates = z.infer<
  typeof CdmProductCommonScheduleResetDatesSchema
>;

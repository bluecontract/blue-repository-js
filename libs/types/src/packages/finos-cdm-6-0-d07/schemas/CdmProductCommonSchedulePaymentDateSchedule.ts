import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';

export const CdmProductCommonSchedulePaymentDateScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/PaymentDateSchedule']
  )(
    z.object({
      description: z.string().optional(),
      finalPaymentDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      interimPaymentDates: z
        .array(
          z.lazy(() => CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema)
        )
        .min(0)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCommonSchedulePaymentDateSchedule = z.infer<
  typeof CdmProductCommonSchedulePaymentDateScheduleSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';

const zod = z as any;

export const CdmProductCommonSchedulePaymentDateScheduleSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/PaymentDateSchedule']
  )(
    zod.object({
      description: zod.string().optional(),
      finalPaymentDate: zod
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      interimPaymentDates: zod
        .array(
          zod.lazy(() => CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema)
        )
        .min(0)
        .optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCommonSchedulePaymentDateSchedule = z.infer<
  typeof CdmProductCommonSchedulePaymentDateScheduleSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeFrequencySchema } from './CdmBaseDatetimeFrequency';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';
import { CdmProductCommonSchedulePaymentDateScheduleSchema } from './CdmProductCommonSchedulePaymentDateSchedule';
import { CdmProductCommonSchedulePayRelativeToEnumSchema } from './CdmProductCommonSchedulePayRelativeToEnum';

export const CdmProductCommonSchedulePaymentDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/PaymentDates']
  )(
    z.object({
      description: z.string().optional(),
      firstPaymentDate: z.string().optional(),
      lastRegularPaymentDate: z.string().optional(),
      name: z.string().optional(),
      paymentDatesAdjustments: z
        .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
        .optional(),
      paymentDateSchedule: z
        .lazy(() => CdmProductCommonSchedulePaymentDateScheduleSchema)
        .optional(),
      paymentDaysOffset: z.lazy(() => CdmBaseDatetimeOffsetSchema).optional(),
      paymentFrequency: z.lazy(() => CdmBaseDatetimeFrequencySchema).optional(),
      payRelativeTo: z
        .lazy(() => CdmProductCommonSchedulePayRelativeToEnumSchema)
        .optional(),
    })
  );

export type CdmProductCommonSchedulePaymentDates = z.infer<
  typeof CdmProductCommonSchedulePaymentDatesSchema
>;

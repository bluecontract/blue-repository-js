import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeFrequencySchema } from './CdmBaseDatetimeFrequency';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';
import { CdmProductCommonSchedulePaymentDateScheduleSchema } from './CdmProductCommonSchedulePaymentDateSchedule';
import { CdmProductCommonSchedulePayRelativeToEnumSchema } from './CdmProductCommonSchedulePayRelativeToEnum';

const zod = z as any;

export const CdmProductCommonSchedulePaymentDatesSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/PaymentDates']
)(
  zod.object({
    description: zod.string().optional(),
    firstPaymentDate: zod.string().optional(),
    lastRegularPaymentDate: zod.string().optional(),
    name: zod.string().optional(),
    paymentDatesAdjustments: zod
      .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
      .optional(),
    paymentDateSchedule: zod
      .lazy(() => CdmProductCommonSchedulePaymentDateScheduleSchema)
      .optional(),
    paymentDaysOffset: zod.lazy(() => CdmBaseDatetimeOffsetSchema).optional(),
    paymentFrequency: zod.lazy(() => CdmBaseDatetimeFrequencySchema).optional(),
    payRelativeTo: zod
      .lazy(() => CdmProductCommonSchedulePayRelativeToEnumSchema)
      .optional(),
  })
);

export type CdmProductCommonSchedulePaymentDates = z.infer<
  typeof CdmProductCommonSchedulePaymentDatesSchema
>;

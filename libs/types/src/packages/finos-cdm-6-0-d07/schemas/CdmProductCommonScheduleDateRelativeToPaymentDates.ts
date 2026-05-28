import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDates';

export const CdmProductCommonScheduleDateRelativeToPaymentDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/DateRelativeToPaymentDates'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      paymentDatesReference: z
        .array(
          z.lazy(
            () =>
              CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDatesSchema
          )
        )
        .min(1)
        .optional(),
    })
  );

export type CdmProductCommonScheduleDateRelativeToPaymentDates = z.infer<
  typeof CdmProductCommonScheduleDateRelativeToPaymentDatesSchema
>;

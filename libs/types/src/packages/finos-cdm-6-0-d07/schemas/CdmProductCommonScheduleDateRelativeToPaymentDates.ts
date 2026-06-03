import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDates';

const zod = z as any;

export const CdmProductCommonScheduleDateRelativeToPaymentDatesSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/DateRelativeToPaymentDates'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      paymentDatesReference: zod
        .array(
          zod.lazy(
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

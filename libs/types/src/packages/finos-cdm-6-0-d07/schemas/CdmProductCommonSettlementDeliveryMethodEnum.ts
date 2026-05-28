import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonSettlementDeliveryMethodEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/DeliveryMethodEnum'
    ]
  )(
    z.enum([
      'DeliveryVersusPayment',
      'FreeOfPayment',
      'PreDelivery',
      'PrePayment',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonSettlementDeliveryMethodEnum = z.infer<
  typeof CdmProductCommonSettlementDeliveryMethodEnumSchema
>;

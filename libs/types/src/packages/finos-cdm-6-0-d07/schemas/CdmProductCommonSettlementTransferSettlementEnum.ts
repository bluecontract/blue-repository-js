import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonSettlementTransferSettlementEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/TransferSettlementEnum'
    ]
  )(
    zod.enum([
      'DeliveryVersusDelivery',
      'DeliveryVersusPayment',
      'NotCentralSettlement',
      'PaymentVersusPayment',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductCommonSettlementTransferSettlementEnum = z.infer<
  typeof CdmProductCommonSettlementTransferSettlementEnumSchema
>;

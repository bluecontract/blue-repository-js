import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const CardTransactionMonitoringRequestRejectedSchema: any =
  withTypeBlueId(
    blueIds['PayNote/Card Transaction Monitoring Request Rejected']
  )(
    ResponseSchema.extend({
      description: zod.string().optional(),
      events: zod.array(zod.string()).optional(),
      name: zod.string().optional(),
      reason: zod.string().optional(),
      rejectedAt: zod.number().optional(),
      targetMerchantId: zod.string().optional(),
    })
  );

export type CardTransactionMonitoringRequestRejected = z.infer<
  typeof CardTransactionMonitoringRequestRejectedSchema
>;

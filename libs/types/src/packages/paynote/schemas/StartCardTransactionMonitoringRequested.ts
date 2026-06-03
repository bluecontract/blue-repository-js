import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const StartCardTransactionMonitoringRequestedSchema: any =
  withTypeBlueId(
    blueIds['PayNote/Start Card Transaction Monitoring Requested']
  )(
    RequestSchema.extend({
      description: zod.string().optional(),
      events: zod.array(zod.string()).optional(),
      name: zod.string().optional(),
      requestedAt: zod.number().optional(),
      targetMerchantId: zod.string().optional(),
    })
  );

export type StartCardTransactionMonitoringRequested = z.infer<
  typeof StartCardTransactionMonitoringRequestedSchema
>;

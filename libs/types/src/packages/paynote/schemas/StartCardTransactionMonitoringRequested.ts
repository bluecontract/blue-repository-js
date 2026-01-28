import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const StartCardTransactionMonitoringRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Start Card Transaction Monitoring Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reportOperationName: z.string().optional(),
    requestedAt: z.number().optional(),
    targetMerchantId: z.string().optional(),
  })
);

export type StartCardTransactionMonitoringRequested = z.infer<
  typeof StartCardTransactionMonitoringRequestedSchema
>;

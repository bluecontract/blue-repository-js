import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const CardTransactionMonitoringRequestRejectedSchema = withTypeBlueId(
  blueIds['PayNote/Card Transaction Monitoring Request Rejected']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    rejectedAt: z.number().optional(),
    targetMerchantId: z.string().optional(),
  })
);

export type CardTransactionMonitoringRequestRejected = z.infer<
  typeof CardTransactionMonitoringRequestRejectedSchema
>;

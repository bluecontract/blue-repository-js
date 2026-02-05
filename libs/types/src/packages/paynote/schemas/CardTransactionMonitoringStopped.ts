import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const CardTransactionMonitoringStoppedSchema = withTypeBlueId(
  blueIds['PayNote/Card Transaction Monitoring Stopped']
)(
  EventSchema.extend({
    events: z.array(z.string()).optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    stoppedAt: z.number().optional(),
    targetMerchantId: z.string().optional(),
  })
);

export type CardTransactionMonitoringStopped = z.infer<
  typeof CardTransactionMonitoringStoppedSchema
>;

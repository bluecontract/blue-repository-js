import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const CardTransactionMonitoringStoppedSchema: any = withTypeBlueId(
  blueIds['PayNote/Card Transaction Monitoring Stopped']
)(
  EventSchema.extend({
    events: zod.array(zod.string()).optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
    stoppedAt: zod.number().optional(),
    targetMerchantId: zod.string().optional(),
  })
);

export type CardTransactionMonitoringStopped = z.infer<
  typeof CardTransactionMonitoringStoppedSchema
>;

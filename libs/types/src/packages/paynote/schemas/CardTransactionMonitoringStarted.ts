import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const CardTransactionMonitoringStartedSchema = withTypeBlueId(
  blueIds['PayNote/Card Transaction Monitoring Started']
)(
  ResponseSchema.extend({
    consentDocumentId: z.string().optional(),
    consentSessionId: z.string().optional(),
    description: z.string().optional(),
    events: z.array(z.string()).optional(),
    name: z.string().optional(),
    startedAt: z.number().optional(),
    targetMerchantId: z.string().optional(),
  })
);

export type CardTransactionMonitoringStarted = z.infer<
  typeof CardTransactionMonitoringStartedSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const CardTransactionMonitoringStartedSchema: any = withTypeBlueId(
  blueIds['PayNote/Card Transaction Monitoring Started']
)(
  ResponseSchema.extend({
    consentDocumentId: zod.string().optional(),
    consentSessionId: zod.string().optional(),
    description: zod.string().optional(),
    events: zod.array(zod.string()).optional(),
    name: zod.string().optional(),
    startedAt: zod.number().optional(),
    targetMerchantId: zod.string().optional(),
  })
);

export type CardTransactionMonitoringStarted = z.infer<
  typeof CardTransactionMonitoringStartedSchema
>;

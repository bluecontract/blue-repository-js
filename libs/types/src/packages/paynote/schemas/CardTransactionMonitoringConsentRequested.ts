import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const CardTransactionMonitoringConsentRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Card Transaction Monitoring Consent Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    requestedAt: z.number().optional(),
    targetMerchantId: z.string().optional(),
  })
);

export type CardTransactionMonitoringConsentRequested = z.infer<
  typeof CardTransactionMonitoringConsentRequestedSchema
>;

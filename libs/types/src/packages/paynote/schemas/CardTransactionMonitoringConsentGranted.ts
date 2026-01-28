import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const CardTransactionMonitoringConsentGrantedSchema = withTypeBlueId(
  blueIds['PayNote/Card Transaction Monitoring Consent Granted']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    grantedAt: z.number().optional(),
    name: z.string().optional(),
    targetMerchantId: z.string().optional(),
  })
);

export type CardTransactionMonitoringConsentGranted = z.infer<
  typeof CardTransactionMonitoringConsentGrantedSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const CardChargeRespondedSchema = withTypeBlueId(
  blueIds['PayNote/Card Charge Responded']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    paymentMandateDocumentId: z.string().optional(),
    reason: z.string().optional(),
    status: z.string().optional(),
  })
);

export type CardChargeResponded = z.infer<typeof CardChargeRespondedSchema>;

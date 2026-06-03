import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const CardChargeRespondedSchema: any = withTypeBlueId(
  blueIds['PayNote/Card Charge Responded']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    paymentMandateDocumentId: zod.string().optional(),
    reason: zod.string().optional(),
    status: zod.string().optional(),
  })
);

export type CardChargeResponded = z.infer<typeof CardChargeRespondedSchema>;

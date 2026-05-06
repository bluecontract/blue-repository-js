import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentInitiatedSchema = withTypeBlueId(
  blueIds['MyOS/Payment Initiated']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    paynoteDocumentId: z.string().optional(),
    paynotePayeeSessionId: z.string().optional(),
  })
);

export type PaymentInitiated = z.infer<typeof PaymentInitiatedSchema>;

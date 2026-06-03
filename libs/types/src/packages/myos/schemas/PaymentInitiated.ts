import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentInitiatedSchema: any = withTypeBlueId(
  blueIds['MyOS/Payment Initiated']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    paynoteDocumentId: zod.string().optional(),
    paynotePayeeSessionId: zod.string().optional(),
  })
);

export type PaymentInitiated = z.infer<typeof PaymentInitiatedSchema>;

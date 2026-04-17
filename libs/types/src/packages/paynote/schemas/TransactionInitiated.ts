import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const TransactionInitiatedSchema = withTypeBlueId(
  blueIds['PayNote/Transaction Initiated']
)(
  ResponseSchema.extend({
    attachmentPoint: z.string().optional(),
    description: z.string().optional(),
    initiatedAmount: z.number().optional(),
    name: z.string().optional(),
    providerReference: z.string().optional(),
    railType: z.string().optional(),
  })
);

export type TransactionInitiated = z.infer<typeof TransactionInitiatedSchema>;

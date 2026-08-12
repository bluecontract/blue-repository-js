import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const TransactionInitiatedSchema: any = withTypeBlueId(
  blueIds['PayNote/Transaction Initiated']
)(
  ResponseSchema.extend({
    attachmentPoint: zod.string().optional(),
    description: zod.string().optional(),
    initiatedAmount: zod.number().optional(),
    name: zod.string().optional(),
    providerReference: zod.string().optional(),
    railType: zod.string().optional(),
  })
);

export type TransactionInitiated = z.infer<typeof TransactionInitiatedSchema>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PayeeAssignmentRejectedSchema = withTypeBlueId(
  blueIds['PayNote/Payee Assignment Rejected']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PayeeAssignmentRejected = z.infer<
  typeof PayeeAssignmentRejectedSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/conversation';

export const PayeeAssignmentRequestedSchema = withTypeBlueId(
  blueIds['Payee Assignment Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    payeeEmail: z.string().optional(),
  })
);

export type PayeeAssignmentRequested = z.infer<
  typeof PayeeAssignmentRequestedSchema
>;

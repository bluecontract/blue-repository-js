import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/core-dev';

export const PayeeAssignmentRequestedSchema = withTypeBlueId(
  blueIds['Payee Assignment Requested']
)(
  RequestSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    payeeEmail: z.string().optional(),
  })
);

export type PayeeAssignmentRequested = z.infer<
  typeof PayeeAssignmentRequestedSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/core-dev';

export const PayeeAssignmentRequestedSchema = withTypeBlueId(
  blueIds['Payee Assignment Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    payeeEmail: z.unknown().optional(),
  })
);

export type PayeeAssignmentRequested = z.infer<
  typeof PayeeAssignmentRequestedSchema
>;

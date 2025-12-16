import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const PayeeAssignmentRequestedSchema = withTypeBlueId(blueIds['PayNote/Payee Assignment Requested'])(
  RequestSchema.extend({
    "payeeEmail": z.string().optional()
  })
);

export type PayeeAssignmentRequested = z.infer<typeof PayeeAssignmentRequestedSchema>;

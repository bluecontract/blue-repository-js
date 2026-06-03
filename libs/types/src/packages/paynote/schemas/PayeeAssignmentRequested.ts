import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const PayeeAssignmentRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payee Assignment Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    payeeEmail: zod.string().optional(),
  })
);

export type PayeeAssignmentRequested = z.infer<
  typeof PayeeAssignmentRequestedSchema
>;

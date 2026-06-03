import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PayeeAssignmentRejectedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payee Assignment Rejected']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type PayeeAssignmentRejected = z.infer<
  typeof PayeeAssignmentRejectedSchema
>;

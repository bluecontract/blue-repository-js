import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PayeeAssignmentConfirmedSchema = withTypeBlueId(
  blueIds['PayNote/Payee Assignment Confirmed']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    payeeRef: z.string().optional(),
  })
);

export type PayeeAssignmentConfirmed = z.infer<
  typeof PayeeAssignmentConfirmedSchema
>;

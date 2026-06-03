import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PayeeAssignmentConfirmedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payee Assignment Confirmed']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    payeeRef: zod.string().optional(),
  })
);

export type PayeeAssignmentConfirmed = z.infer<
  typeof PayeeAssignmentConfirmedSchema
>;

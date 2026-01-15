import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from './Operation';

export const AcceptChangeOperationSchema = withTypeBlueId(
  blueIds['Conversation/Accept Change Operation']
)(
  OperationSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type AcceptChangeOperation = z.infer<typeof AcceptChangeOperationSchema>;

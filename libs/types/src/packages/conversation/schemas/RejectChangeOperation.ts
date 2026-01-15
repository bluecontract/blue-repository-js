import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from './Operation';

export const RejectChangeOperationSchema = withTypeBlueId(
  blueIds['Conversation/Reject Change Operation']
)(
  OperationSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type RejectChangeOperation = z.infer<typeof RejectChangeOperationSchema>;

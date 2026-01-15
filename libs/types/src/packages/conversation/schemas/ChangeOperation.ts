import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChangeRequestSchema } from './ChangeRequest';
import { OperationSchema } from './Operation';

export const ChangeOperationSchema = withTypeBlueId(
  blueIds['Conversation/Change Operation']
)(
  OperationSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    request: ChangeRequestSchema.optional(),
  })
);

export type ChangeOperation = z.infer<typeof ChangeOperationSchema>;

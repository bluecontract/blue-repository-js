import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/conversation';

export const CallOperationFailedSchema = withTypeBlueId(
  blueIds['Call Operation Failed']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    operation: z.string().optional(),
    reason: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type CallOperationFailed = z.infer<typeof CallOperationFailedSchema>;

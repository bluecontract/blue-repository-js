import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const CallOperationFailedSchema = withTypeBlueId(
  blueIds['Call Operation Failed']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    reason: z.string().optional(),
    operation: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type CallOperationFailed = z.infer<typeof CallOperationFailedSchema>;

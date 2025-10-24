import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const CallOperationFailedSchema = withTypeBlueId(
  blueIds['Call Operation Failed']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    operation: z.unknown().optional(),
    reason: z.unknown().optional(),
    targetSessionId: z.unknown().optional(),
  })
);

export type CallOperationFailed = z.infer<typeof CallOperationFailedSchema>;

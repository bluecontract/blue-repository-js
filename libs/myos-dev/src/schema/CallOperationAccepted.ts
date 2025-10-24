import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const CallOperationAcceptedSchema = withTypeBlueId(
  blueIds['Call Operation Accepted']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    operation: z.unknown().optional(),
    targetSessionId: z.unknown().optional(),
  })
);

export type CallOperationAccepted = z.infer<typeof CallOperationAcceptedSchema>;

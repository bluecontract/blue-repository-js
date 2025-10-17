import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const CallOperationAcceptedSchema = withTypeBlueId(
  blueIds['Call Operation Accepted']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    operation: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type CallOperationAccepted = z.infer<typeof CallOperationAcceptedSchema>;

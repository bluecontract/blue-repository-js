import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const CallOperationRequestedSchema = withTypeBlueId(
  blueIds['Call Operation Requested']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    onBehalfOf: z.unknown().optional(),
    operation: z.unknown().optional(),
    request: blueNodeField().optional(),
    targetSessionId: z.unknown().optional(),
  })
);

export type CallOperationRequested = z.infer<
  typeof CallOperationRequestedSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const CallOperationRequestedSchema = withTypeBlueId(
  blueIds['Call Operation Requested']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    onBehalfOf: z.string().optional(),
    request: blueNodeField().optional(),
    operation: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type CallOperationRequested = z.infer<
  typeof CallOperationRequestedSchema
>;

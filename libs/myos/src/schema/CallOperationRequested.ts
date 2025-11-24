import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/conversation';

export const CallOperationRequestedSchema = withTypeBlueId(
  blueIds['Call Operation Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    onBehalfOf: z.string().optional(),
    operation: z.string().optional(),
    request: blueNodeField().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type CallOperationRequested = z.infer<
  typeof CallOperationRequestedSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const CallOperationRequestedSchema = withTypeBlueId(
  blueIds['MyOS/Call Operation Requested']
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

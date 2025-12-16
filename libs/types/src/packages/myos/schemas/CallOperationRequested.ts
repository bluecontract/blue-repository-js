import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const CallOperationRequestedSchema = withTypeBlueId(blueIds['MyOS/Call Operation Requested'])(
  RequestSchema.extend({
    "onBehalfOf": z.string().optional(),
    "targetSessionId": z.string().optional(),
    "operation": z.string().optional(),
    "request": blueNodeField().optional()
  })
);

export type CallOperationRequested = z.infer<typeof CallOperationRequestedSchema>;

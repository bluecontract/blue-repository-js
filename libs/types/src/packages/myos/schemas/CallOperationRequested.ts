import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const CallOperationRequestedSchema: any = withTypeBlueId(
  blueIds['MyOS/Call Operation Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    onBehalfOf: zod.string().optional(),
    operation: zod.string().optional(),
    request: blueNodeField().optional(),
    targetSessionId: zod.string().optional(),
  })
);

export type CallOperationRequested = z.infer<
  typeof CallOperationRequestedSchema
>;

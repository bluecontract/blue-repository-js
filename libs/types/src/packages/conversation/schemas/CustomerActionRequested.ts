import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from './Request';

export const CustomerActionRequestedSchema = withTypeBlueId(
  blueIds['Conversation/Customer Action Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    inputSchema: blueNodeField().optional(),
    message: z.string().optional(),
    mode: z.string().optional(),
    name: z.string().optional(),
    options: z.array(z.string()).optional(),
    title: z.string().optional(),
  })
);

export type CustomerActionRequested = z.infer<
  typeof CustomerActionRequestedSchema
>;

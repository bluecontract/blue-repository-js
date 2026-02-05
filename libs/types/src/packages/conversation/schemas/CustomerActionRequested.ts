import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from './Request';

export const CustomerActionRequestedSchema = withTypeBlueId(
  blueIds['Conversation/Customer Action Requested']
)(
  RequestSchema.extend({
    actionId: z.string().optional(),
    actionType: z.string().optional(),
    description: z.string().optional(),
    message: z.string().optional(),
    name: z.string().optional(),
    operationName: z.string().optional(),
    prefillRequestJson: z.string().optional(),
    title: z.string().optional(),
  })
);

export type CustomerActionRequested = z.infer<
  typeof CustomerActionRequestedSchema
>;

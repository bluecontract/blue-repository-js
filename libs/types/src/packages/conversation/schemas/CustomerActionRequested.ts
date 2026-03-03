import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from './Request';

export const CustomerActionRequestedSchema = withTypeBlueId(
  blueIds['Conversation/Customer Action Requested']
)(
  RequestSchema.extend({
    actions: z
      .array(
        z.object({
          inputPlaceholder: z.string().optional(),
          inputRequired: z.boolean().optional(),
          inputSchema: blueNodeField().optional(),
          inputTitle: z.string().optional(),
          label: z.string().optional(),
          variant: z.string().optional(),
        })
      )
      .optional(),
    description: z.string().optional(),
    message: z.string().optional(),
    name: z.string().optional(),
    title: z.string().optional(),
  })
);

export type CustomerActionRequested = z.infer<
  typeof CustomerActionRequestedSchema
>;

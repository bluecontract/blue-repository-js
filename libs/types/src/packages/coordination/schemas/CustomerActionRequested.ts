import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from './Request';

const zod = z as any;

export const CustomerActionRequestedSchema: any = withTypeBlueId(
  blueIds['Coordination/Customer Action Requested']
)(
  RequestSchema.extend({
    actions: zod
      .array(
        zod.object({
          inputPlaceholder: zod.string().optional(),
          inputRequired: zod.boolean().optional(),
          inputSchema: blueNodeField().optional(),
          inputTitle: zod.string().optional(),
          label: zod.string().optional(),
          variant: zod.string().optional(),
        })
      )
      .optional(),
    description: zod.string().optional(),
    message: zod.string().optional(),
    name: zod.string().optional(),
    title: zod.string().optional(),
  })
);

export type CustomerActionRequested = z.infer<
  typeof CustomerActionRequestedSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const ReverseAfterCompletionRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Reverse After Completion Requested']
)(
  RequestSchema.extend({
    amount: z.number().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type ReverseAfterCompletionRequested = z.infer<
  typeof ReverseAfterCompletionRequestedSchema
>;

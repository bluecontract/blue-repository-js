import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const CancelBeforeCompletionRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Cancel Before Completion Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type CancelBeforeCompletionRequested = z.infer<
  typeof CancelBeforeCompletionRequestedSchema
>;

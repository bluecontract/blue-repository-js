import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const ReverseAfterCompletionRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Reverse After Completion Requested']
)(
  RequestSchema.extend({
    amount: zod.number().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type ReverseAfterCompletionRequested = z.infer<
  typeof ReverseAfterCompletionRequestedSchema
>;

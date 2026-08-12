import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const CancelBeforeCompletionRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Cancel Before Completion Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type CancelBeforeCompletionRequested = z.infer<
  typeof CancelBeforeCompletionRequestedSchema
>;

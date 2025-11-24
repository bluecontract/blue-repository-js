import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/conversation';

export const CallOperationRespondedSchema = withTypeBlueId(
  blueIds['Call Operation Responded']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    events: z.array(ResponseSchema).optional(),
    name: z.string().optional(),
  })
);

export type CallOperationResponded = z.infer<
  typeof CallOperationRespondedSchema
>;

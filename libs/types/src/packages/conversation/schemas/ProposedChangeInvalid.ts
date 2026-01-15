import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const ProposedChangeInvalidSchema = withTypeBlueId(
  blueIds['Conversation/Proposed Change Invalid']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type ProposedChangeInvalid = z.infer<typeof ProposedChangeInvalidSchema>;

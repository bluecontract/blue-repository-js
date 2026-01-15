import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { EventSchema } from '../../conversation/schemas/Event';

export const PayNoteClientDecisionDiscardedSchema = withTypeBlueId(
  blueIds['PayNote/PayNote Client Decision Discarded']
)(
  EventSchema.extend({
    decision: z.string().optional(),
    decisionAt: TimestampSchema.optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PayNoteClientDecisionDiscarded = z.infer<
  typeof PayNoteClientDecisionDiscardedSchema
>;

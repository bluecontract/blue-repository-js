import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const PayNoteClientDecisionDiscardedSchema: any = withTypeBlueId(
  blueIds['PayNote/PayNote Client Decision Discarded']
)(
  EventSchema.extend({
    decision: zod.string().optional(),
    decisionAt: zod.lazy(() => TimestampSchema).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type PayNoteClientDecisionDiscarded = z.infer<
  typeof PayNoteClientDecisionDiscardedSchema
>;

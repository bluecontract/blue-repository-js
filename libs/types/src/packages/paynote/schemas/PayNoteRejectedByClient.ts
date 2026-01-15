import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { EventSchema } from '../../conversation/schemas/Event';

export const PayNoteRejectedByClientSchema = withTypeBlueId(
  blueIds['PayNote/PayNote Rejected By Client']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    rejectedAt: TimestampSchema.optional(),
  })
);

export type PayNoteRejectedByClient = z.infer<
  typeof PayNoteRejectedByClientSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { EventSchema } from '../../conversation/schemas/Event';

export const PayNoteAcceptedByClientSchema = withTypeBlueId(
  blueIds['PayNote/PayNote Accepted By Client']
)(
  EventSchema.extend({
    acceptedAt: TimestampSchema.optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PayNoteAcceptedByClient = z.infer<
  typeof PayNoteAcceptedByClientSchema
>;

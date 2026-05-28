import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { EventSchema } from '../../coordination/schemas/Event';

export const PayNoteAcceptedByClientSchema = withTypeBlueId(
  blueIds['PayNote/PayNote Accepted By Client']
)(
  EventSchema.extend({
    acceptedAt: z.lazy(() => TimestampSchema).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PayNoteAcceptedByClient = z.infer<
  typeof PayNoteAcceptedByClientSchema
>;

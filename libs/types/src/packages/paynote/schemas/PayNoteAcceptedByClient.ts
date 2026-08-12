import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const PayNoteAcceptedByClientSchema: any = withTypeBlueId(
  blueIds['PayNote/PayNote Accepted By Client']
)(
  EventSchema.extend({
    acceptedAt: zod.lazy(() => TimestampSchema).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type PayNoteAcceptedByClient = z.infer<
  typeof PayNoteAcceptedByClientSchema
>;

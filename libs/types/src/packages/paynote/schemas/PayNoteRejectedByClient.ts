import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const PayNoteRejectedByClientSchema: any = withTypeBlueId(
  blueIds['PayNote/PayNote Rejected By Client']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
    rejectedAt: zod.lazy(() => TimestampSchema).optional(),
  })
);

export type PayNoteRejectedByClient = z.infer<
  typeof PayNoteRejectedByClientSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const WorkerSessionStartingSchema = withTypeBlueId(blueIds['MyOS/Worker Session Starting'])(
  EventSchema.extend({
    "granteeDocumentId": z.string().optional(),
    "targetDocumentType": z.string().optional()
  })
);

export type WorkerSessionStarting = z.infer<typeof WorkerSessionStartingSchema>;

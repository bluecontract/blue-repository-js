import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const WorkerSessionStartingSchema = withTypeBlueId(
  blueIds['MyOS/Worker Session Starting']
)(
  EventSchema.extend({
    description: z.string().optional(),
    granteeDocumentId: z.string().optional(),
    name: z.string().optional(),
    targetDocumentType: z.string().optional(),
  })
);

export type WorkerSessionStarting = z.infer<typeof WorkerSessionStartingSchema>;

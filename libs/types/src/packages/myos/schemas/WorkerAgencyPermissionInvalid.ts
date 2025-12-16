import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const WorkerAgencyPermissionInvalidSchema = withTypeBlueId(blueIds['MyOS/Worker Agency Permission Invalid'])(
  EventSchema.extend({
    "issues": z.array(z.string()).optional()
  })
);

export type WorkerAgencyPermissionInvalid = z.infer<typeof WorkerAgencyPermissionInvalidSchema>;

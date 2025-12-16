import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const WorkerAgencyPermissionRevokeRequestedSchema = withTypeBlueId(blueIds['MyOS/Worker Agency Permission Revoke Requested'])(
  EventSchema.extend({
    "reason": z.string().optional()
  })
);

export type WorkerAgencyPermissionRevokeRequested = z.infer<typeof WorkerAgencyPermissionRevokeRequestedSchema>;

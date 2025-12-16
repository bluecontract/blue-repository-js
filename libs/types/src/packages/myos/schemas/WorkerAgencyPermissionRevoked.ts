import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const WorkerAgencyPermissionRevokedSchema = withTypeBlueId(blueIds['MyOS/Worker Agency Permission Revoked'])(
  EventSchema.extend({})
);

export type WorkerAgencyPermissionRevoked = z.infer<typeof WorkerAgencyPermissionRevokedSchema>;

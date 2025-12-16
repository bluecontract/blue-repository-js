import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionRejectedSchema = withTypeBlueId(blueIds['MyOS/Worker Agency Permission Rejected'])(
  EventSchema.extend({
    "granteeDocumentId": z.string().optional(),
    "allowedWorkerAgencyPermissions": z.array(WorkerAgencyPermissionSchema).optional(),
    "reason": z.string().optional()
  })
);

export type WorkerAgencyPermissionRejected = z.infer<typeof WorkerAgencyPermissionRejectedSchema>;

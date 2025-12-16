import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionRevokingInProgressSchema = withTypeBlueId(blueIds['MyOS/Worker Agency Permission Revoking in Progress'])(
  EventSchema.extend({
    "granteeDocumentId": z.string().optional(),
    "allowedWorkerAgencyPermissions": z.array(WorkerAgencyPermissionSchema).optional(),
    "note": z.string().optional()
  })
);

export type WorkerAgencyPermissionRevokingInProgress = z.infer<typeof WorkerAgencyPermissionRevokingInProgressSchema>;

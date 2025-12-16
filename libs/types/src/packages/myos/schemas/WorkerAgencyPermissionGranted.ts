import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionGrantedSchema = withTypeBlueId(blueIds['MyOS/Worker Agency Permission Granted'])(
  EventSchema.extend({
    "granteeDocumentId": z.string().optional(),
    "allowedWorkerAgencyPermissions": z.array(WorkerAgencyPermissionSchema).optional()
  })
);

export type WorkerAgencyPermissionGranted = z.infer<typeof WorkerAgencyPermissionGrantedSchema>;

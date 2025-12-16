import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionGrantRequestedSchema = withTypeBlueId(blueIds['MyOS/Worker Agency Permission Grant Requested'])(
  EventSchema.extend({
    "onBehalfOf": z.string().optional(),
    "allowedWorkerAgencyPermissions": z.array(WorkerAgencyPermissionSchema).optional()
  })
);

export type WorkerAgencyPermissionGrantRequested = z.infer<typeof WorkerAgencyPermissionGrantRequestedSchema>;

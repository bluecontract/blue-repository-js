import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionRejectedSchema = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Rejected']
)(
  EventSchema.extend({
    allowedWorkerAgencyPermissions: z
      .array(WorkerAgencyPermissionSchema)
      .optional(),
    description: z.string().optional(),
    granteeDocumentId: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type WorkerAgencyPermissionRejected = z.infer<
  typeof WorkerAgencyPermissionRejectedSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionRevokingInProgressSchema = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Revoking in Progress']
)(
  EventSchema.extend({
    allowedWorkerAgencyPermissions: z
      .array(WorkerAgencyPermissionSchema)
      .optional(),
    description: z.string().optional(),
    granteeDocumentId: z.string().optional(),
    name: z.string().optional(),
    note: z.string().optional(),
  })
);

export type WorkerAgencyPermissionRevokingInProgress = z.infer<
  typeof WorkerAgencyPermissionRevokingInProgressSchema
>;

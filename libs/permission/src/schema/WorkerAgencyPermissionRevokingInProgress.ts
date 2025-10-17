import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionRevokingInProgressSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Revoking in Progress']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    note: z.string().optional(),
    granteeDocumentId: z.string().optional(),
    allowedWorkerAgencyPermissions: z
      .array(WorkerAgencyPermissionSchema)
      .optional(),
  })
);

export type WorkerAgencyPermissionRevokingInProgress = z.infer<
  typeof WorkerAgencyPermissionRevokingInProgressSchema
>;

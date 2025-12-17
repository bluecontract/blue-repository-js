import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/conversation';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionGrantingInProgressSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Granting in Progress']
)(
  ResponseSchema.extend({
    allowedWorkerAgencyPermissions: z
      .array(WorkerAgencyPermissionSchema)
      .optional(),
    description: z.string().optional(),
    granteeDocumentId: z.string().optional(),
    name: z.string().optional(),
    note: z.string().optional(),
  })
);

export type WorkerAgencyPermissionGrantingInProgress = z.infer<
  typeof WorkerAgencyPermissionGrantingInProgressSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionRejectedSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Rejected']
)(
  ResponseSchema.extend({
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

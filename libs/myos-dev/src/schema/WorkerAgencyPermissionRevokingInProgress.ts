import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionRevokingInProgressSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Revoking in Progress']
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

export type WorkerAgencyPermissionRevokingInProgress = z.infer<
  typeof WorkerAgencyPermissionRevokingInProgressSchema
>;

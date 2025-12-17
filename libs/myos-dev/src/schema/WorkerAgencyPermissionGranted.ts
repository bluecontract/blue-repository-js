import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionGrantedSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Granted']
)(
  ResponseSchema.extend({
    allowedWorkerAgencyPermissions: z
      .array(WorkerAgencyPermissionSchema)
      .optional(),
    description: z.string().optional(),
    granteeDocumentId: z.string().optional(),
    name: z.string().optional(),
  })
);

export type WorkerAgencyPermissionGranted = z.infer<
  typeof WorkerAgencyPermissionGrantedSchema
>;

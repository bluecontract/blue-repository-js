import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionGrantSchema = withTypeBlueId(blueIds['MyOS/Worker Agency Permission Grant'])(
  MyOSAdminBaseSchema.extend({
    "granteeDocumentId": z.string().optional(),
    "allowedWorkerAgencyPermissions": z.array(WorkerAgencyPermissionSchema).optional()
  })
);

export type WorkerAgencyPermissionGrant = z.infer<typeof WorkerAgencyPermissionGrantSchema>;

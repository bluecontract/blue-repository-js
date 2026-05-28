import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionRejectedSchema = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Rejected']
)(
  ResponseSchema.extend({
    allowedWorkerAgencyPermissions: z
      .array(z.lazy(() => WorkerAgencyPermissionSchema))
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

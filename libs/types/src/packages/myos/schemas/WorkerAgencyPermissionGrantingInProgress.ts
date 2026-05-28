import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionGrantingInProgressSchema = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Granting in Progress']
)(
  ResponseSchema.extend({
    allowedWorkerAgencyPermissions: z
      .array(z.lazy(() => WorkerAgencyPermissionSchema))
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

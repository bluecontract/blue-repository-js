import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionGrantedSchema = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Granted']
)(
  ResponseSchema.extend({
    allowedWorkerAgencyPermissions: z
      .array(z.lazy(() => WorkerAgencyPermissionSchema))
      .optional(),
    description: z.string().optional(),
    grantDocumentId: z.string().optional(),
    granteeDocumentId: z.string().optional(),
    name: z.string().optional(),
  })
);

export type WorkerAgencyPermissionGranted = z.infer<
  typeof WorkerAgencyPermissionGrantedSchema
>;

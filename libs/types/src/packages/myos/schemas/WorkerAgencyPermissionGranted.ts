import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

const zod = z as any;

export const WorkerAgencyPermissionGrantedSchema: any = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Granted']
)(
  ResponseSchema.extend({
    allowedWorkerAgencyPermissions: zod
      .array(zod.lazy(() => WorkerAgencyPermissionSchema))
      .optional(),
    description: zod.string().optional(),
    grantDocumentId: zod.string().optional(),
    granteeDocumentId: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type WorkerAgencyPermissionGranted = z.infer<
  typeof WorkerAgencyPermissionGrantedSchema
>;

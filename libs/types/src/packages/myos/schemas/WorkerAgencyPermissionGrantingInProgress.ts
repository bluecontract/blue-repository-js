import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

const zod = z as any;

export const WorkerAgencyPermissionGrantingInProgressSchema: any =
  withTypeBlueId(blueIds['MyOS/Worker Agency Permission Granting in Progress'])(
    ResponseSchema.extend({
      allowedWorkerAgencyPermissions: zod
        .array(zod.lazy(() => WorkerAgencyPermissionSchema))
        .optional(),
      description: zod.string().optional(),
      granteeDocumentId: zod.string().optional(),
      name: zod.string().optional(),
      note: zod.string().optional(),
    })
  );

export type WorkerAgencyPermissionGrantingInProgress = z.infer<
  typeof WorkerAgencyPermissionGrantingInProgressSchema
>;

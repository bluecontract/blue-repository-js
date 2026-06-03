import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

const zod = z as any;

export const WorkerAgencyPermissionGrantRequestedSchema: any = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Grant Requested']
)(
  RequestSchema.extend({
    allowedWorkerAgencyPermissions: zod
      .array(zod.lazy(() => WorkerAgencyPermissionSchema))
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    onBehalfOf: zod.string().optional(),
  })
);

export type WorkerAgencyPermissionGrantRequested = z.infer<
  typeof WorkerAgencyPermissionGrantRequestedSchema
>;

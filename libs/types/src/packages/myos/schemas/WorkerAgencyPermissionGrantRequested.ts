import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionGrantRequestedSchema = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Grant Requested']
)(
  RequestSchema.extend({
    allowedWorkerAgencyPermissions: z
      .array(z.lazy(() => WorkerAgencyPermissionSchema))
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    onBehalfOf: z.string().optional(),
  })
);

export type WorkerAgencyPermissionGrantRequested = z.infer<
  typeof WorkerAgencyPermissionGrantRequestedSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/conversation';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionGrantRequestedSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Grant Requested']
)(
  EventSchema.extend({
    allowedWorkerAgencyPermissions: z
      .array(WorkerAgencyPermissionSchema)
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    onBehalfOf: z.string().optional(),
  })
);

export type WorkerAgencyPermissionGrantRequested = z.infer<
  typeof WorkerAgencyPermissionGrantRequestedSchema
>;

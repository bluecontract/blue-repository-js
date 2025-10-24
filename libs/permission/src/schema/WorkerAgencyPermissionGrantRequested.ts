import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const WorkerAgencyPermissionGrantRequestedSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Grant Requested']
)(
  EventSchema.extend({
    allowedWorkerAgencyPermissions: z.unknown().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    onBehalfOf: z.unknown().optional(),
  })
);

export type WorkerAgencyPermissionGrantRequested = z.infer<
  typeof WorkerAgencyPermissionGrantRequestedSchema
>;

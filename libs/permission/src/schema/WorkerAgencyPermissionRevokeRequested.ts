import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const WorkerAgencyPermissionRevokeRequestedSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Revoke Requested']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type WorkerAgencyPermissionRevokeRequested = z.infer<
  typeof WorkerAgencyPermissionRevokeRequestedSchema
>;

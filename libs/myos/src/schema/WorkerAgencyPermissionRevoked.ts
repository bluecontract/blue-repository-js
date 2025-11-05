import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/conversation';

export const WorkerAgencyPermissionRevokedSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Revoked']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type WorkerAgencyPermissionRevoked = z.infer<
  typeof WorkerAgencyPermissionRevokedSchema
>;

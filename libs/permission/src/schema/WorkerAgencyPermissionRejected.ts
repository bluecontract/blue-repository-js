import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const WorkerAgencyPermissionRejectedSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Rejected']
)(
  EventSchema.extend({
    allowedWorkerAgencyPermissions: z.unknown().optional(),
    description: z.string().optional(),
    granteeDocumentId: z.unknown().optional(),
    name: z.string().optional(),
    reason: z.unknown().optional(),
  })
);

export type WorkerAgencyPermissionRejected = z.infer<
  typeof WorkerAgencyPermissionRejectedSchema
>;

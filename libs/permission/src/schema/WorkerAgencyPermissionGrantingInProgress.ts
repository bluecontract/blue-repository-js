import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const WorkerAgencyPermissionGrantingInProgressSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Granting in Progress']
)(
  EventSchema.extend({
    allowedWorkerAgencyPermissions: z.unknown().optional(),
    description: z.string().optional(),
    granteeDocumentId: z.unknown().optional(),
    name: z.string().optional(),
    note: z.unknown().optional(),
  })
);

export type WorkerAgencyPermissionGrantingInProgress = z.infer<
  typeof WorkerAgencyPermissionGrantingInProgressSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const WorkerAgencyPermissionGrantedSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Granted']
)(
  EventSchema.extend({
    allowedWorkerAgencyPermissions: z.unknown().optional(),
    description: z.string().optional(),
    granteeDocumentId: z.unknown().optional(),
    name: z.string().optional(),
  })
);

export type WorkerAgencyPermissionGranted = z.infer<
  typeof WorkerAgencyPermissionGrantedSchema
>;

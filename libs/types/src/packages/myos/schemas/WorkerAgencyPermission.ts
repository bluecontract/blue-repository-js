import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const WorkerAgencyPermissionSchema = withTypeBlueId(blueIds['MyOS/Worker Agency Permission'])(
  z.object({
    "workerType": blueNodeField().optional(),
    "permissions": SingleDocumentPermissionSetSchema.optional()
  })
);

export type WorkerAgencyPermission = z.infer<typeof WorkerAgencyPermissionSchema>;

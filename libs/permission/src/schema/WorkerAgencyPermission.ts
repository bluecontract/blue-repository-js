import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const WorkerAgencyPermissionSchema = withTypeBlueId(
  blueIds['Worker Agency Permission']
)(
  z.object({
    name: z.string().optional(),
    workerType: blueNodeField().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
  })
);

export type WorkerAgencyPermission = z.infer<
  typeof WorkerAgencyPermissionSchema
>;

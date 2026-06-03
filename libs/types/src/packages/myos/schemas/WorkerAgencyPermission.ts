import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

const zod = z as any;

export const WorkerAgencyPermissionSchema: any = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission']
)(
  zod.object({
    name: zod.string().optional(),
    permissions: zod.lazy(() => SingleDocumentPermissionSetSchema).optional(),
    workerType: blueNodeField().optional(),
  })
);

export type WorkerAgencyPermission = z.infer<
  typeof WorkerAgencyPermissionSchema
>;

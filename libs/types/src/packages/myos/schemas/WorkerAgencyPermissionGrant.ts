import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

const zod = z as any;

export const WorkerAgencyPermissionGrantSchema: any = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Grant']
)(
  MyOSAdminBaseSchema.extend({
    allowedWorkerAgencyPermissions: zod
      .array(zod.lazy(() => WorkerAgencyPermissionSchema))
      .optional(),
    contracts: zod
      .object({
        granterChannel: zod.lazy(() => MyOSTimelineChannelSchema).optional(),
        initLifecycleChannel: blueNodeField().optional(),
        revoke: zod.lazy(() => OperationSchema).optional(),
        revokeImplGranter: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        validateOnInit: zod.lazy(() => SequentialWorkflowSchema).optional(),
      })
      .optional(),
    granteeDocumentId: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type WorkerAgencyPermissionGrant = z.infer<
  typeof WorkerAgencyPermissionGrantSchema
>;

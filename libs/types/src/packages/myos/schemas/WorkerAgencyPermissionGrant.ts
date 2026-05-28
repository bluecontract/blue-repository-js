import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionGrantSchema = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Grant']
)(
  MyOSAdminBaseSchema.extend({
    allowedWorkerAgencyPermissions: z
      .array(z.lazy(() => WorkerAgencyPermissionSchema))
      .optional(),
    contracts: z
      .object({
        granterChannel: z.lazy(() => MyOSTimelineChannelSchema).optional(),
        initLifecycleChannel: z
          .lazy(() => LifecycleEventChannelSchema)
          .optional(),
        revoke: z.lazy(() => OperationSchema).optional(),
        revokeImplGranter: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        validateOnInit: z.lazy(() => SequentialWorkflowSchema).optional(),
      })
      .optional(),
    granteeDocumentId: z.string().optional(),
    name: z.string().optional(),
  })
);

export type WorkerAgencyPermissionGrant = z.infer<
  typeof WorkerAgencyPermissionGrantSchema
>;

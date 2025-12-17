import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../conversation/schemas/Operation';
import { SequentialWorkflowSchema } from '../../conversation/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../conversation/schemas/SequentialWorkflowOperation';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';

export const WorkerAgencyPermissionGrantSchema = withTypeBlueId(
  blueIds['MyOS/Worker Agency Permission Grant']
)(
  MyOSAdminBaseSchema.extend({
    allowedWorkerAgencyPermissions: z
      .array(WorkerAgencyPermissionSchema)
      .optional(),
    contracts: z
      .object({
        granterChannel: MyOSTimelineChannelSchema.optional(),
        initLifecycleChannel: LifecycleEventChannelSchema.optional(),
        revoke: OperationSchema.optional(),
        revokeImplGranter: SequentialWorkflowOperationSchema.optional(),
        validateOnInit: SequentialWorkflowSchema.optional(),
      })
      .optional(),
    granteeDocumentId: z.string().optional(),
    name: z.string().optional(),
  })
);

export type WorkerAgencyPermissionGrant = z.infer<
  typeof WorkerAgencyPermissionGrantSchema
>;

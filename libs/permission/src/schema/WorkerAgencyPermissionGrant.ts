import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import {
  MyOSAdminBaseSchema,
  MyOSTimelineChannelSchema,
} from '@blue-repository/myos-dev';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';
import {
  LifecycleEventChannelSchema,
  OperationSchema,
  SequentialWorkflowOperationSchema,
  SequentialWorkflowSchema,
} from '@blue-repository/core-dev';

export const WorkerAgencyPermissionGrantSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Grant']
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

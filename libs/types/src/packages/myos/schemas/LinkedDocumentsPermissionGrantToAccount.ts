import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../conversation/schemas/Operation';
import { SequentialWorkflowSchema } from '../../conversation/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../conversation/schemas/SequentialWorkflowOperation';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';

export const LinkedDocumentsPermissionGrantToAccountSchema = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Grant To Account']
)(
  MyOSAdminBaseSchema.extend({
    contracts: z
      .object({
        granteeChannel: MyOSTimelineChannelSchema.optional(),
        granterChannel: MyOSTimelineChannelSchema.optional(),
        initLifecycleChannel: LifecycleEventChannelSchema.optional(),
        revoke: OperationSchema.optional(),
        revokeImplGranter: SequentialWorkflowOperationSchema.optional(),
        validateOnInit: SequentialWorkflowSchema.optional(),
      })
      .optional(),
    granterDocumentSessionId: z.string().optional(),
    links: LinkedDocumentsPermissionSetSchema.optional(),
    name: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type LinkedDocumentsPermissionGrantToAccount = z.infer<
  typeof LinkedDocumentsPermissionGrantToAccountSchema
>;

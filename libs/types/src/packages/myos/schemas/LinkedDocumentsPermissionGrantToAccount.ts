import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CompositeTimelineChannelSchema } from '../../coordination/schemas/CompositeTimelineChannel';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
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
        granteeChannel: z.lazy(() => MyOSTimelineChannelSchema).optional(),
        granterChannel: z.lazy(() => MyOSTimelineChannelSchema).optional(),
        initLifecycleChannel: z
          .lazy(() => LifecycleEventChannelSchema)
          .optional(),
        revoke: z.lazy(() => OperationSchema).optional(),
        revokeAccessChannel: z
          .lazy(() => CompositeTimelineChannelSchema)
          .optional(),
        revokeImpl: z.lazy(() => SequentialWorkflowOperationSchema).optional(),
        validateOnInit: z.lazy(() => SequentialWorkflowSchema).optional(),
      })
      .optional(),
    granterDocumentSessionId: z.string().optional(),
    links: z.lazy(() => LinkedDocumentsPermissionSetSchema).optional(),
    name: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type LinkedDocumentsPermissionGrantToAccount = z.infer<
  typeof LinkedDocumentsPermissionGrantToAccountSchema
>;

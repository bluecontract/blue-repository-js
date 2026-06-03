import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CompositeTimelineChannelSchema } from '../../coordination/schemas/CompositeTimelineChannel';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';

const zod = z as any;

export const LinkedDocumentsPermissionGrantToAccountSchema: any =
  withTypeBlueId(blueIds['MyOS/Linked Documents Permission Grant To Account'])(
    MyOSAdminBaseSchema.extend({
      contracts: zod
        .object({
          granteeChannel: zod.lazy(() => MyOSTimelineChannelSchema).optional(),
          granterChannel: zod.lazy(() => MyOSTimelineChannelSchema).optional(),
          initLifecycleChannel: blueNodeField().optional(),
          revoke: zod.lazy(() => OperationSchema).optional(),
          revokeAccessChannel: zod
            .lazy(() => CompositeTimelineChannelSchema)
            .optional(),
          revokeImpl: zod
            .lazy(() => SequentialWorkflowOperationSchema)
            .optional(),
          validateOnInit: zod.lazy(() => SequentialWorkflowSchema).optional(),
        })
        .optional(),
      granterDocumentSessionId: zod.string().optional(),
      links: zod.lazy(() => LinkedDocumentsPermissionSetSchema).optional(),
      name: zod.string().optional(),
      targetSessionId: zod.string().optional(),
    })
  );

export type LinkedDocumentsPermissionGrantToAccount = z.infer<
  typeof LinkedDocumentsPermissionGrantToAccountSchema
>;

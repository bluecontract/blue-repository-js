import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';

export const LinkedDocumentsPermissionGrantToDocumentSchema = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Grant To Document']
)(
  MyOSAdminBaseSchema.extend({
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
    granterDocumentSessionId: z.string().optional(),
    links: z.lazy(() => LinkedDocumentsPermissionSetSchema).optional(),
    name: z.string().optional(),
    skipValidation: z.boolean().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type LinkedDocumentsPermissionGrantToDocument = z.infer<
  typeof LinkedDocumentsPermissionGrantToDocumentSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';

const zod = z as any;

export const LinkedDocumentsPermissionGrantToDocumentSchema: any =
  withTypeBlueId(blueIds['MyOS/Linked Documents Permission Grant To Document'])(
    MyOSAdminBaseSchema.extend({
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
      granterDocumentSessionId: zod.string().optional(),
      links: zod.lazy(() => LinkedDocumentsPermissionSetSchema).optional(),
      name: zod.string().optional(),
      skipValidation: zod.boolean().optional(),
      targetSessionId: zod.string().optional(),
    })
  );

export type LinkedDocumentsPermissionGrantToDocument = z.infer<
  typeof LinkedDocumentsPermissionGrantToDocumentSchema
>;

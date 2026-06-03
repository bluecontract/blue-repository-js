import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

const zod = z as any;

export const SingleDocumentPermissionGrantToDocumentSchema: any =
  withTypeBlueId(blueIds['MyOS/Single Document Permission Grant To Document'])(
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
      name: zod.string().optional(),
      permissions: zod.lazy(() => SingleDocumentPermissionSetSchema).optional(),
      skipValidation: zod.boolean().optional(),
      targetSessionId: zod.string().optional(),
    })
  );

export type SingleDocumentPermissionGrantToDocument = z.infer<
  typeof SingleDocumentPermissionGrantToDocumentSchema
>;

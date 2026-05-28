import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantToDocumentSchema = withTypeBlueId(
  blueIds['MyOS/Single Document Permission Grant To Document']
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
    name: z.string().optional(),
    permissions: z.lazy(() => SingleDocumentPermissionSetSchema).optional(),
    skipValidation: z.boolean().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SingleDocumentPermissionGrantToDocument = z.infer<
  typeof SingleDocumentPermissionGrantToDocumentSchema
>;

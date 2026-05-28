import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CompositeTimelineChannelSchema } from '../../coordination/schemas/CompositeTimelineChannel';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantToAccountSchema = withTypeBlueId(
  blueIds['MyOS/Single Document Permission Grant To Account']
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
    name: z.string().optional(),
    permissions: z.lazy(() => SingleDocumentPermissionSetSchema).optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SingleDocumentPermissionGrantToAccount = z.infer<
  typeof SingleDocumentPermissionGrantToAccountSchema
>;

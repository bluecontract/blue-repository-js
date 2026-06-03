import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CompositeTimelineChannelSchema } from '../../coordination/schemas/CompositeTimelineChannel';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

const zod = z as any;

export const SingleDocumentPermissionGrantToAccountSchema: any = withTypeBlueId(
  blueIds['MyOS/Single Document Permission Grant To Account']
)(
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
    name: zod.string().optional(),
    permissions: zod.lazy(() => SingleDocumentPermissionSetSchema).optional(),
    targetSessionId: zod.string().optional(),
  })
);

export type SingleDocumentPermissionGrantToAccount = z.infer<
  typeof SingleDocumentPermissionGrantToAccountSchema
>;

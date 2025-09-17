import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import {
  MyOSAdminBaseSchema,
  MyOSTimelineChannelSchema,
} from '@blue-repository/myos-dev';
import {
  LifecycleEventChannelSchema,
  OperationSchema,
  SequentialWorkflowOperationSchema,
  SequentialWorkflowSchema,
} from '@blue-repository/core-dev';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantToAccountSchema = withTypeBlueId(
  blueIds['Single Document Permission Grant To Account']
)(
  MyOSAdminBaseSchema.extend({
    name: z.string().optional(),
    granterDocumentSessionId: z.string().optional(),
    contracts: z
      .object({
        granterChannel: MyOSTimelineChannelSchema.optional(),
        revokeImplGranter: SequentialWorkflowOperationSchema.optional(),
        initLifecycleChannel: LifecycleEventChannelSchema.optional(),
        revoke: OperationSchema.optional(),
        granteeChannel: MyOSTimelineChannelSchema.optional(),
        validateOnInit: SequentialWorkflowSchema.optional(),
      })
      .optional(),
    targetSessionId: z.string().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
  })
);

export type SingleDocumentPermissionGrantToAccount = z.infer<
  typeof SingleDocumentPermissionGrantToAccountSchema
>;

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
    name: z.string().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SingleDocumentPermissionGrantToAccount = z.infer<
  typeof SingleDocumentPermissionGrantToAccountSchema
>;

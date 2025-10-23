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

export const SingleDocumentPermissionGrantToDocumentSchema = withTypeBlueId(
  blueIds['Single Document Permission Grant To Document']
)(
  MyOSAdminBaseSchema.extend({
    name: z.string().optional(),
    granteeDocumentId: z.string().optional(),
    granterDocumentSessionId: z.string().optional(),
    contracts: z
      .object({
        granterChannel: MyOSTimelineChannelSchema.optional(),
        revoke: OperationSchema.optional(),
        revokeImplGranter: SequentialWorkflowOperationSchema.optional(),
        initLifecycleChannel: LifecycleEventChannelSchema.optional(),
        validateOnInit: SequentialWorkflowSchema.optional(),
      })
      .optional(),
    targetSessionId: z.string().optional(),
    permissions: SingleDocumentPermissionSetSchema.optional(),
  })
);

export type SingleDocumentPermissionGrantToDocument = z.infer<
  typeof SingleDocumentPermissionGrantToDocumentSchema
>;

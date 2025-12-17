import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/core-dev';

export const SingleDocumentPermissionRevokeRequestedSchema = withTypeBlueId(
  blueIds['Single Document Permission Revoke Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type SingleDocumentPermissionRevokeRequested = z.infer<
  typeof SingleDocumentPermissionRevokeRequestedSchema
>;

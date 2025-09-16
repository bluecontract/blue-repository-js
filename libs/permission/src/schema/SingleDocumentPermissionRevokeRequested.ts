import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const SingleDocumentPermissionRevokeRequestedSchema = withTypeBlueId(
  blueIds['Single Document Permission Revoke Requested']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type SingleDocumentPermissionRevokeRequested = z.infer<
  typeof SingleDocumentPermissionRevokeRequestedSchema
>;

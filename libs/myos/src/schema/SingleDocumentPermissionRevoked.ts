import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/conversation';

export const SingleDocumentPermissionRevokedSchema = withTypeBlueId(
  blueIds['Single Document Permission Revoked']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type SingleDocumentPermissionRevoked = z.infer<
  typeof SingleDocumentPermissionRevokedSchema
>;

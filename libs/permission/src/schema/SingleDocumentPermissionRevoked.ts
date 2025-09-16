import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const SingleDocumentPermissionRevokedSchema = withTypeBlueId(
  blueIds['Single Document Permission Revoked']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type SingleDocumentPermissionRevoked = z.infer<
  typeof SingleDocumentPermissionRevokedSchema
>;

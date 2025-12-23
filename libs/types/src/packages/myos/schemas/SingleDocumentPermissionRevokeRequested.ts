import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const SingleDocumentPermissionRevokeRequestedSchema = withTypeBlueId(
  blueIds['MyOS/Single Document Permission Revoke Requested']
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

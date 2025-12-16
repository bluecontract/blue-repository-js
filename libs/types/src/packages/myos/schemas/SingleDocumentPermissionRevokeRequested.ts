import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const SingleDocumentPermissionRevokeRequestedSchema = withTypeBlueId(blueIds['MyOS/Single Document Permission Revoke Requested'])(
  EventSchema.extend({
    "reason": z.string().optional()
  })
);

export type SingleDocumentPermissionRevokeRequested = z.infer<typeof SingleDocumentPermissionRevokeRequestedSchema>;

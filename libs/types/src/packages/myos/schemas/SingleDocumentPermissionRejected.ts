import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionRejectedSchema = withTypeBlueId(blueIds['MyOS/Single Document Permission Rejected'])(
  EventSchema.extend({
    "targetSessionId": z.string().optional(),
    "permissions": SingleDocumentPermissionSetSchema.optional(),
    "reason": z.string().optional()
  })
);

export type SingleDocumentPermissionRejected = z.infer<typeof SingleDocumentPermissionRejectedSchema>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionRevokingInProgressSchema = withTypeBlueId(blueIds['MyOS/Single Document Permission Revoking in Progress'])(
  EventSchema.extend({
    "targetSessionId": z.string().optional(),
    "permissions": SingleDocumentPermissionSetSchema.optional(),
    "note": z.string().optional()
  })
);

export type SingleDocumentPermissionRevokingInProgress = z.infer<typeof SingleDocumentPermissionRevokingInProgressSchema>;

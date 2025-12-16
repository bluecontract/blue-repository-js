import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const SingleDocumentPermissionGrantedSchema = withTypeBlueId(blueIds['MyOS/Single Document Permission Granted'])(
  EventSchema.extend({
    "targetSessionId": z.string().optional(),
    "permissions": SingleDocumentPermissionSetSchema.optional()
  })
);

export type SingleDocumentPermissionGranted = z.infer<typeof SingleDocumentPermissionGrantedSchema>;

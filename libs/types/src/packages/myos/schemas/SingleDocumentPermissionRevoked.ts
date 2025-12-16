import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const SingleDocumentPermissionRevokedSchema = withTypeBlueId(blueIds['MyOS/Single Document Permission Revoked'])(
  EventSchema.extend({})
);

export type SingleDocumentPermissionRevoked = z.infer<typeof SingleDocumentPermissionRevokedSchema>;

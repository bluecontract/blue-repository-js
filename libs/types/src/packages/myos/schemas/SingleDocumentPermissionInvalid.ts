import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const SingleDocumentPermissionInvalidSchema = withTypeBlueId(blueIds['MyOS/Single Document Permission Invalid'])(
  EventSchema.extend({
    "issues": z.array(z.string()).optional()
  })
);

export type SingleDocumentPermissionInvalid = z.infer<typeof SingleDocumentPermissionInvalidSchema>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const SingleDocumentPermissionValidatedSchema = withTypeBlueId(blueIds['MyOS/Single Document Permission Validated'])(
  EventSchema.extend({})
);

export type SingleDocumentPermissionValidated = z.infer<typeof SingleDocumentPermissionValidatedSchema>;

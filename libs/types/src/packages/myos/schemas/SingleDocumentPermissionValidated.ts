import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const SingleDocumentPermissionValidatedSchema = withTypeBlueId(
  blueIds['MyOS/Single Document Permission Validated']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type SingleDocumentPermissionValidated = z.infer<
  typeof SingleDocumentPermissionValidatedSchema
>;

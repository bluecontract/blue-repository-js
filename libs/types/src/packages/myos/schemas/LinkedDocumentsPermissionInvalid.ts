import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const LinkedDocumentsPermissionInvalidSchema = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Invalid']
)(
  EventSchema.extend({
    description: z.string().optional(),
    issues: z.array(z.string()).optional(),
    name: z.string().optional(),
  })
);

export type LinkedDocumentsPermissionInvalid = z.infer<
  typeof LinkedDocumentsPermissionInvalidSchema
>;

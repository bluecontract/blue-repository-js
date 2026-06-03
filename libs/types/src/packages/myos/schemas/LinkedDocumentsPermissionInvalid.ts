import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const LinkedDocumentsPermissionInvalidSchema: any = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Invalid']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    issues: zod.array(zod.string()).optional(),
    name: zod.string().optional(),
  })
);

export type LinkedDocumentsPermissionInvalid = z.infer<
  typeof LinkedDocumentsPermissionInvalidSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';

export const LinkedDocumentsPermissionRejectedSchema = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Rejected']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    links: LinkedDocumentsPermissionSetSchema.optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type LinkedDocumentsPermissionRejected = z.infer<
  typeof LinkedDocumentsPermissionRejectedSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';

export const LinkedDocumentsPermissionRevokedSchema = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Revoked']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    links: LinkedDocumentsPermissionSetSchema.optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type LinkedDocumentsPermissionRevoked = z.infer<
  typeof LinkedDocumentsPermissionRevokedSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';

export const LinkedDocumentsPermissionRevokedSchema = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Revoked']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    links: z.lazy(() => LinkedDocumentsPermissionSetSchema).optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type LinkedDocumentsPermissionRevoked = z.infer<
  typeof LinkedDocumentsPermissionRevokedSchema
>;

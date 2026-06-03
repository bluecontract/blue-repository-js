import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';

const zod = z as any;

export const LinkedDocumentsPermissionRevokedSchema: any = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Revoked']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    links: zod.lazy(() => LinkedDocumentsPermissionSetSchema).optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
    targetSessionId: zod.string().optional(),
  })
);

export type LinkedDocumentsPermissionRevoked = z.infer<
  typeof LinkedDocumentsPermissionRevokedSchema
>;

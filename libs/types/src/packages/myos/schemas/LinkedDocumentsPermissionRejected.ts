import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';

const zod = z as any;

export const LinkedDocumentsPermissionRejectedSchema: any = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Rejected']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    links: zod.lazy(() => LinkedDocumentsPermissionSetSchema).optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
    targetSessionId: zod.string().optional(),
  })
);

export type LinkedDocumentsPermissionRejected = z.infer<
  typeof LinkedDocumentsPermissionRejectedSchema
>;

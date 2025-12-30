import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const LinkedDocumentsPermissionRevokeRequestedSchema = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Revoke Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type LinkedDocumentsPermissionRevokeRequested = z.infer<
  typeof LinkedDocumentsPermissionRevokeRequestedSchema
>;

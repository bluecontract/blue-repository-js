import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const LinkedDocumentsPermissionRevokeRequestedSchema: any =
  withTypeBlueId(blueIds['MyOS/Linked Documents Permission Revoke Requested'])(
    RequestSchema.extend({
      description: zod.string().optional(),
      grantDocumentId: zod.string().optional(),
      name: zod.string().optional(),
      reason: zod.string().optional(),
    })
  );

export type LinkedDocumentsPermissionRevokeRequested = z.infer<
  typeof LinkedDocumentsPermissionRevokeRequestedSchema
>;

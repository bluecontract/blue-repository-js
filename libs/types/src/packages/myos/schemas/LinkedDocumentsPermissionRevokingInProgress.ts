import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';

export const LinkedDocumentsPermissionRevokingInProgressSchema = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Revoking in Progress']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    links: LinkedDocumentsPermissionSetSchema.optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type LinkedDocumentsPermissionRevokingInProgress = z.infer<
  typeof LinkedDocumentsPermissionRevokingInProgressSchema
>;

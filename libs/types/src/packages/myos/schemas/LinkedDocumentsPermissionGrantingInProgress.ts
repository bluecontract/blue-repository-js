import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';

export const LinkedDocumentsPermissionGrantingInProgressSchema = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Granting in Progress']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    links: LinkedDocumentsPermissionSetSchema.optional(),
    name: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type LinkedDocumentsPermissionGrantingInProgress = z.infer<
  typeof LinkedDocumentsPermissionGrantingInProgressSchema
>;

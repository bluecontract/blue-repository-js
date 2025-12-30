import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

export const LinkedDocumentsPermissionSetSchema = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Set']
)(z.object({}).catchall(SingleDocumentPermissionSetSchema));

export type LinkedDocumentsPermissionSet = z.infer<
  typeof LinkedDocumentsPermissionSetSchema
>;

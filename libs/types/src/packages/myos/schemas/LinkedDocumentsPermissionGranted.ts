import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';

export const LinkedDocumentsPermissionGrantedSchema = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Granted']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    grantDocumentId: z.string().optional(),
    links: z.lazy(() => LinkedDocumentsPermissionSetSchema).optional(),
    name: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type LinkedDocumentsPermissionGranted = z.infer<
  typeof LinkedDocumentsPermissionGrantedSchema
>;

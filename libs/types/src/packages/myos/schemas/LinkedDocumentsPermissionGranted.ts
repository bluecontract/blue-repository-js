import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';

const zod = z as any;

export const LinkedDocumentsPermissionGrantedSchema: any = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Granted']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    grantDocumentId: zod.string().optional(),
    links: zod.lazy(() => LinkedDocumentsPermissionSetSchema).optional(),
    name: zod.string().optional(),
    targetSessionId: zod.string().optional(),
  })
);

export type LinkedDocumentsPermissionGranted = z.infer<
  typeof LinkedDocumentsPermissionGrantedSchema
>;

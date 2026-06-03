import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

const zod = z as any;

export const LinkedDocumentsPermissionSetSchema: any = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Set']
)(zod.object({}).catchall(zod.lazy(() => SingleDocumentPermissionSetSchema)));

export type LinkedDocumentsPermissionSet = z.infer<
  typeof LinkedDocumentsPermissionSetSchema
>;

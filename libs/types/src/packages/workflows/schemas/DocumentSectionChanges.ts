import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSectionChangeEntrySchema } from './DocumentSectionChangeEntry';

const zod = z as any;

export const DocumentSectionChangesSchema: any = withTypeBlueId(
  blueIds['Workflows/Document Section Changes']
)(
  zod.object({
    add: zod.array(zod.lazy(() => DocumentSectionChangeEntrySchema)).optional(),
    description: zod.string().optional(),
    modify: zod
      .array(zod.lazy(() => DocumentSectionChangeEntrySchema))
      .optional(),
    name: zod.string().optional(),
    remove: zod.array(zod.string()).optional(),
  })
);

export type DocumentSectionChanges = z.infer<
  typeof DocumentSectionChangesSchema
>;

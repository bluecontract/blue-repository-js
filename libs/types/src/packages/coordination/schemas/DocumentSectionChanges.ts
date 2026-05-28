import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSectionChangeEntrySchema } from './DocumentSectionChangeEntry';

export const DocumentSectionChangesSchema = withTypeBlueId(
  blueIds['Coordination/Document Section Changes']
)(
  z.object({
    add: z.array(z.lazy(() => DocumentSectionChangeEntrySchema)).optional(),
    description: z.string().optional(),
    modify: z.array(z.lazy(() => DocumentSectionChangeEntrySchema)).optional(),
    name: z.string().optional(),
    remove: z.array(z.string()).optional(),
  })
);

export type DocumentSectionChanges = z.infer<
  typeof DocumentSectionChangesSchema
>;

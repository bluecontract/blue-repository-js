import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSectionChangeEntrySchema } from './DocumentSectionChangeEntry';

export const DocumentSectionChangesSchema = withTypeBlueId(
  blueIds['Conversation/Document Section Changes']
)(
  z.object({
    add: z.array(DocumentSectionChangeEntrySchema).optional(),
    description: z.string().optional(),
    modify: z.array(DocumentSectionChangeEntrySchema).optional(),
    name: z.string().optional(),
    remove: z.array(z.string()).optional(),
  })
);

export type DocumentSectionChanges = z.infer<
  typeof DocumentSectionChangesSchema
>;

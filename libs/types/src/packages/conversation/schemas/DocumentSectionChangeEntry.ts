import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ContractSchema } from '../../core/schemas/Contract';
import { DocumentSectionSchema } from './DocumentSection';

export const DocumentSectionChangeEntrySchema = withTypeBlueId(
  blueIds['Conversation/Document Section Change Entry']
)(
  z.object({
    contracts: z.record(z.string(), ContractSchema).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    section: DocumentSectionSchema.optional(),
    sectionKey: z.string().optional(),
  })
);

export type DocumentSectionChangeEntry = z.infer<
  typeof DocumentSectionChangeEntrySchema
>;

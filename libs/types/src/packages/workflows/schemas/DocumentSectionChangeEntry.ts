import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { DocumentSectionSchema } from './DocumentSection';

const zod = z as any;

export const DocumentSectionChangeEntrySchema: any = withTypeBlueId(
  blueIds['Workflows/Document Section Change Entry']
)(
  zod.object({
    contracts: zod.record(zod.string(), blueNodeField()).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    section: zod.lazy(() => DocumentSectionSchema).optional(),
    sectionKey: zod.string().optional(),
  })
);

export type DocumentSectionChangeEntry = z.infer<
  typeof DocumentSectionChangeEntrySchema
>;

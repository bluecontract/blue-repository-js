import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { DocumentSectionChangesSchema } from './DocumentSectionChanges';

const zod = z as any;

export const ChangeRequestSchema: any = withTypeBlueId(
  blueIds['Workflows/Change Request']
)(
  zod.object({
    changeset: zod.array(blueNodeField()).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    sectionChanges: zod.lazy(() => DocumentSectionChangesSchema).optional(),
    summary: zod.string().optional(),
  })
);

export type ChangeRequest = z.infer<typeof ChangeRequestSchema>;

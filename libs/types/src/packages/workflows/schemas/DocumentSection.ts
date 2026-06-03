import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const DocumentSectionSchema: any = withTypeBlueId(
  blueIds['Workflows/Document Section']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    relatedContracts: zod.array(zod.string()).optional(),
    relatedFields: zod.array(zod.string()).optional(),
    summary: zod.string().optional(),
    title: zod.string().optional(),
  })
);

export type DocumentSection = z.infer<typeof DocumentSectionSchema>;

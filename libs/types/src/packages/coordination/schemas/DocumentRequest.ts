import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SourceSchema } from './Source';

const zod = z as any;

export const DocumentRequestSchema: any = withTypeBlueId(
  blueIds['Coordination/Document Request']
)(
  SourceSchema.extend({
    description: zod.string().optional(),
    documentId: zod.string().optional(),
    epoch: zod.number().optional(),
    name: zod.string().optional(),
  })
);

export type DocumentRequest = z.infer<typeof DocumentRequestSchema>;

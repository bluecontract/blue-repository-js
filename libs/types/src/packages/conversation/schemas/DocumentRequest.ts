import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SourceSchema } from './Source';

export const DocumentRequestSchema = withTypeBlueId(
  blueIds['Conversation/Document Request']
)(
  SourceSchema.extend({
    description: z.string().optional(),
    documentId: z.string().optional(),
    epoch: z.number().optional(),
    name: z.string().optional(),
  })
);

export type DocumentRequest = z.infer<typeof DocumentRequestSchema>;

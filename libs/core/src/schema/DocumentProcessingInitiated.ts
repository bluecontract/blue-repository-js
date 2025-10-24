import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TextSchema } from './Text';

export const DocumentProcessingInitiatedSchema = withTypeBlueId(
  blueIds['Document Processing Initiated']
)(
  z.object({
    description: z.string().optional(),
    documentId: TextSchema.optional(),
    name: z.string().optional(),
  })
);

export type DocumentProcessingInitiated = z.infer<
  typeof DocumentProcessingInitiatedSchema
>;

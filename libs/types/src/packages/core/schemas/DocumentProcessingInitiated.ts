import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const DocumentProcessingInitiatedSchema = withTypeBlueId(blueIds['Core/Document Processing Initiated'])(
  z.object({
    "documentId": z.string().optional()
  })
);

export type DocumentProcessingInitiated = z.infer<typeof DocumentProcessingInitiatedSchema>;

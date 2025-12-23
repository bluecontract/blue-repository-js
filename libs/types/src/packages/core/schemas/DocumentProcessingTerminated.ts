import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const DocumentProcessingTerminatedSchema = withTypeBlueId(
  blueIds['Core/Document Processing Terminated']
)(
  z.object({
    cause: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type DocumentProcessingTerminated = z.infer<
  typeof DocumentProcessingTerminatedSchema
>;

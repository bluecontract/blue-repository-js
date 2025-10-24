import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TextSchema } from './Text';

export const DocumentProcessingTerminatedSchema = withTypeBlueId(
  blueIds['Document Processing Terminated']
)(
  z.object({
    cause: TextSchema.optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    reason: TextSchema.optional(),
  })
);

export type DocumentProcessingTerminated = z.infer<
  typeof DocumentProcessingTerminatedSchema
>;

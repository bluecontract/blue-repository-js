import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const DocumentStatusSchema = withTypeBlueId(
  blueIds['Conversation/Document Status']
)(
  z.object({
    description: z.string().optional(),
    mode: z.string().optional(),
    name: z.string().optional(),
  })
);

export type DocumentStatus = z.infer<typeof DocumentStatusSchema>;

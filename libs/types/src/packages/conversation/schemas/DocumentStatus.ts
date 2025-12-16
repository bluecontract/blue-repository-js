import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const DocumentStatusSchema = withTypeBlueId(blueIds['Conversation/Document Status'])(
  z.object({
    "mode": z.string().optional()
  })
);

export type DocumentStatus = z.infer<typeof DocumentStatusSchema>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';

export const StatusInProgressSchema = withTypeBlueId(blueIds['Conversation/Status In Progress'])(
  DocumentStatusSchema.extend({
    "mode": z.string().optional()
  })
);

export type StatusInProgress = z.infer<typeof StatusInProgressSchema>;

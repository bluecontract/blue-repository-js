import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';

export const StatusCompletedSchema = withTypeBlueId(blueIds['Conversation/Status Completed'])(
  DocumentStatusSchema.extend({
    "mode": z.string().optional()
  })
);

export type StatusCompleted = z.infer<typeof StatusCompletedSchema>;

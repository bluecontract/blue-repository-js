import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';

export const StatusFailedSchema = withTypeBlueId(blueIds['Conversation/Status Failed'])(
  DocumentStatusSchema.extend({
    "mode": z.string().optional()
  })
);

export type StatusFailed = z.infer<typeof StatusFailedSchema>;

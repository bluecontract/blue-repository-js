import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';
import { EventSchema } from './Event';

export const StatusChangeSchema = withTypeBlueId(blueIds['Conversation/Status Change'])(
  EventSchema.extend({
    "status": DocumentStatusSchema.optional()
  })
);

export type StatusChange = z.infer<typeof StatusChangeSchema>;

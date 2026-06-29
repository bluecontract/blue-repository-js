import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';
import { TimelineEntrySchema } from './TimelineEntry';

const zod = z as any;

export const ChatMessageSchema: any = withTypeBlueId(
  blueIds['Coordination/Chat Message']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    message: zod.string().optional(),
    name: zod.string().optional(),
    replyTo: zod.lazy(() => TimelineEntrySchema).optional(),
  })
);

export type ChatMessage = z.infer<typeof ChatMessageSchema>;

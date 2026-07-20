import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from './Event';

const zod = z as any;

export const MessageSchema: any = withTypeBlueId(
  blueIds['Coordination/Message']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    inResponseTo: blueNodeField().optional(),
    name: zod.string().optional(),
    recipientChannel: zod.string().optional(),
    requestId: zod.string().optional(),
    threadId: zod.string().optional(),
  })
);

export type Message = z.infer<typeof MessageSchema>;

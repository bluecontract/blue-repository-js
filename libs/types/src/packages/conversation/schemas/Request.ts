import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const RequestSchema = withTypeBlueId(blueIds['Conversation/Request'])(
  EventSchema.extend({
    "requestId": z.string().optional()
  })
);

export type Request = z.infer<typeof RequestSchema>;

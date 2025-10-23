import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const RequestSchema = withTypeBlueId(blueIds['Request'])(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    requestId: z.string().optional(),
  })
);

export type Request = z.infer<typeof RequestSchema>;

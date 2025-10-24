import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const RequestSchema = withTypeBlueId(blueIds['Request'])(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    requestId: z.unknown().optional(),
  })
);

export type Request = z.infer<typeof RequestSchema>;

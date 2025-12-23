import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from './Event';

export const ResponseSchema = withTypeBlueId(blueIds['Conversation/Response'])(
  EventSchema.extend({
    description: z.string().optional(),
    inResponseTo: blueNodeField().optional(),
    name: z.string().optional(),
  })
);

export type Response = z.infer<typeof ResponseSchema>;

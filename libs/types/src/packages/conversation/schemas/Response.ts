import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from './Event';

export const ResponseSchema = withTypeBlueId(blueIds['Conversation/Response'])(
  EventSchema.extend({
    "inResponseTo": blueNodeField().optional()
  })
);

export type Response = z.infer<typeof ResponseSchema>;

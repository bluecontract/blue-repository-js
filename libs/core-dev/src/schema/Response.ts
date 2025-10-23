import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const ResponseSchema = withTypeBlueId(blueIds['Response'])(
  EventSchema.extend({
    description: z.string().optional(),
    inResponseTo: z
      .object({
        type: z
          .object({
            description: z.string().optional(),
            incomingEvent: blueNodeField().optional(),
            name: z.string().optional(),
            requestId: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
    name: z.string().optional(),
  })
);

export type Response = z.infer<typeof ResponseSchema>;

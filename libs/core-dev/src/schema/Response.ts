import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const ResponseSchema = withTypeBlueId(blueIds['Response'])(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    inResponseTo: z
      .object({
        type: z
          .object({
            name: z.string().optional(),
            description: z.string().optional(),
            requestId: z.string().optional(),
            incomingEvent: blueNodeField().optional(),
          })
          .optional(),
      })
      .optional(),
  })
);

export type Response = z.infer<typeof ResponseSchema>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const DocumentUpdateSchema = withTypeBlueId(blueIds['Document Update'])(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    val: blueNodeField().optional(),
    op: z.string().optional(),
    path: z.string().optional(),
    from: z.string().optional(),
  })
);

export type DocumentUpdate = z.infer<typeof DocumentUpdateSchema>;

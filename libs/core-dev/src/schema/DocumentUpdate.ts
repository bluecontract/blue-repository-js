import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const DocumentUpdateSchema = withTypeBlueId(blueIds['Document Update'])(
  EventSchema.extend({
    description: z.string().optional(),
    from: z.string().optional(),
    name: z.string().optional(),
    op: z.string().optional(),
    path: z.string().optional(),
    val: blueNodeField().optional(),
  })
);

export type DocumentUpdate = z.infer<typeof DocumentUpdateSchema>;

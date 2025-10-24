import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const DocumentUpdateSchema = withTypeBlueId(blueIds['Document Update'])(
  EventSchema.extend({
    description: z.string().optional(),
    from: z.unknown().optional(),
    name: z.string().optional(),
    op: z.unknown().optional(),
    path: z.unknown().optional(),
    val: blueNodeField().optional(),
  })
);

export type DocumentUpdate = z.infer<typeof DocumentUpdateSchema>;

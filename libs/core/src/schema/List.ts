import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { TextSchema } from './Text';

export const ListSchema = withTypeBlueId(blueIds['List'])(
  z.object({
    description: z.string().optional(),
    itemType: blueNodeField().optional(),
    mergePolicy: TextSchema.optional(),
    name: z.string().optional(),
  })
);

export type List = z.infer<typeof ListSchema>;

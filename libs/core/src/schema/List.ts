import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const ListSchema = withTypeBlueId(blueIds['List'])(
  z.object({
    description: z.string().optional(),
    itemType: blueNodeField().optional(),
    mergePolicy: z.string().optional(),
    name: z.string().optional(),
  })
);

export type List = z.infer<typeof ListSchema>;

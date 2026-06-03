import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const LinkSchema: any = withTypeBlueId(blueIds['MyOS/Link'])(
  zod.object({
    anchor: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type Link = z.infer<typeof LinkSchema>;

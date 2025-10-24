import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const BooleanSchema = withTypeBlueId(blueIds['Boolean'])(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Boolean = z.infer<typeof BooleanSchema>;

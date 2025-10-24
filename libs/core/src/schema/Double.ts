import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const DoubleSchema = withTypeBlueId(blueIds['Double'])(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Double = z.infer<typeof DoubleSchema>;

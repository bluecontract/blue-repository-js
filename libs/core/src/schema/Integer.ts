import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const IntegerSchema = withTypeBlueId(blueIds['Integer'])(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Integer = z.infer<typeof IntegerSchema>;

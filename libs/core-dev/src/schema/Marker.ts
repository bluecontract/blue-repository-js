import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MarkerSchema = withTypeBlueId(blueIds['Marker'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type Marker = z.infer<typeof MarkerSchema>;

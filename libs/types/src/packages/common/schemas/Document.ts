import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const DocumentSchema = withTypeBlueId(blueIds['Common/Document'])(
  z.object({
    description: z.string().optional(),
    kind: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Document = z.infer<typeof DocumentSchema>;

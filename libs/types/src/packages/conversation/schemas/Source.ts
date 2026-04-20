import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const SourceSchema = withTypeBlueId(blueIds['Conversation/Source'])(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Source = z.infer<typeof SourceSchema>;

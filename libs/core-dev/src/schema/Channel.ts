import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const ChannelSchema = withTypeBlueId(blueIds['Channel'])(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Channel = z.infer<typeof ChannelSchema>;

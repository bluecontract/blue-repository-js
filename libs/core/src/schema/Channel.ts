import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ContractSchema } from './Contract';

export const ChannelSchema = withTypeBlueId(blueIds['Channel'])(
  ContractSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Channel = z.infer<typeof ChannelSchema>;

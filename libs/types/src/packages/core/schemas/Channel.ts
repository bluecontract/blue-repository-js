import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ContractSchema } from './Contract';

export const ChannelSchema = withTypeBlueId(blueIds['Core/Channel'])(
  ContractSchema.extend({
    "event": blueNodeField().optional()
  })
);

export type Channel = z.infer<typeof ChannelSchema>;

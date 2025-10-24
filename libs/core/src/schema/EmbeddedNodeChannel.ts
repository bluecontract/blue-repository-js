import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema } from './Channel';

export const EmbeddedNodeChannelSchema = withTypeBlueId(
  blueIds['Embedded Node Channel']
)(
  ChannelSchema.extend({
    childPath: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type EmbeddedNodeChannel = z.infer<typeof EmbeddedNodeChannelSchema>;

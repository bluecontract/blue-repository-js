import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema } from './Channel';
import { TextSchema } from './Text';

export const EmbeddedNodeChannelSchema = withTypeBlueId(
  blueIds['Embedded Node Channel']
)(
  ChannelSchema.extend({
    childPath: TextSchema.optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type EmbeddedNodeChannel = z.infer<typeof EmbeddedNodeChannelSchema>;

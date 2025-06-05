import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { ChannelSchema } from './Channel';

export const EmbeddedNodeChannelSchema = withTypeBlueId(
  blueIds['Embedded Node Channel']
)(
  ChannelSchema.extend({
    name: z.string().optional(),
    path: z.string().optional(),
  })
);

export type EmbeddedNodeChannel = z.infer<typeof EmbeddedNodeChannelSchema>;

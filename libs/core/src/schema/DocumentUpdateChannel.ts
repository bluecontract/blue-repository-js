import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema } from './Channel';
import { TextSchema } from './Text';

export const DocumentUpdateChannelSchema = withTypeBlueId(
  blueIds['Document Update Channel']
)(
  ChannelSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    path: TextSchema.optional(),
  })
);

export type DocumentUpdateChannel = z.infer<typeof DocumentUpdateChannelSchema>;

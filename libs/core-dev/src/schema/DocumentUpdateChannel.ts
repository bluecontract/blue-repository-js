import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { ChannelSchema } from './Channel';

export const DocumentUpdateChannelSchema = withTypeBlueId(
  blueIds.DocumentUpdateChannel
)(
  ChannelSchema.extend({
    name: z.string().optional(),
    path: z.string().optional(),
  })
);

export type DocumentUpdateChannel = z.infer<typeof DocumentUpdateChannelSchema>;

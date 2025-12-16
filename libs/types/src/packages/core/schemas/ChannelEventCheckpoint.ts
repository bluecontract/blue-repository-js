import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { MarkerSchema } from './Marker';

export const ChannelEventCheckpointSchema = withTypeBlueId(blueIds['Core/Channel Event Checkpoint'])(
  MarkerSchema.extend({
    "lastEvents": z.record(z.string(), blueNodeField()).optional()
  })
);

export type ChannelEventCheckpoint = z.infer<typeof ChannelEventCheckpointSchema>;

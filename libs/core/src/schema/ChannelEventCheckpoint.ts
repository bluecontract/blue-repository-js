import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from './Marker';

export const ChannelEventCheckpointSchema = withTypeBlueId(
  blueIds['Channel Event Checkpoint']
)(
  MarkerSchema.extend({
    description: z.string().optional(),
    lastEvents: z.record(z.string(), blueNodeField()).optional(),
    name: z.string().optional(),
  })
);

export type ChannelEventCheckpoint = z.infer<
  typeof ChannelEventCheckpointSchema
>;

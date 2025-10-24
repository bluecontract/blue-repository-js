import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from './Marker';
import { DictionarySchema } from './Dictionary';

export const ChannelEventCheckpointSchema = withTypeBlueId(
  blueIds['Channel Event Checkpoint']
)(
  MarkerSchema.extend({
    description: z.string().optional(),
    lastEvents: DictionarySchema.optional(),
    name: z.string().optional(),
  })
);

export type ChannelEventCheckpoint = z.infer<
  typeof ChannelEventCheckpointSchema
>;

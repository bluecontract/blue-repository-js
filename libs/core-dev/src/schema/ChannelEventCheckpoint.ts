import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const ChannelEventCheckpointSchema = withTypeBlueId(
  blueIds['Channel Event Checkpoint']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    lastEvents: z.record(z.string(), z.unknown()).optional(),
  })
);

export type ChannelEventCheckpoint = z.infer<
  typeof ChannelEventCheckpointSchema
>;

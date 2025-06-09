import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const ChessGameStartedEventSchema = withTypeBlueId(
  blueIds['Chess Game Started Event']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    playerBlackTimeline: blueNodeField().optional(),
    playerWhiteTimeline: blueNodeField().optional(),
  })
);

export type ChessGameStartedEvent = z.infer<typeof ChessGameStartedEventSchema>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';

export const ChessGameStartedEventSchema = withTypeBlueId(
  blueIds.ChessGameStartedEvent
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    playerBlackTimeline: blueNodeField().optional(),
    playerWhiteTimeline: blueNodeField().optional(),
  })
);

export type ChessGameStartedEvent = z.infer<typeof ChessGameStartedEventSchema>;

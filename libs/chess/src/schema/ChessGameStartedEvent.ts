import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const ChessGameStartedEventSchema = withTypeBlueId(
  blueIds.ChessGameStartedEvent
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    playerBlackTimeline: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    playerWhiteTimeline: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
  })
);

export type ChessGameStartedEvent = z.infer<typeof ChessGameStartedEventSchema>;

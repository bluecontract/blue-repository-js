import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const ChessGameMoveMadeEventSchema = withTypeBlueId(
  blueIds.ChessGameMoveMadeEvent
)(
  z.object({
    name: z.string().optional(),
    playerMakingMove: z.string().optional(),
    winner: z.string().optional(),
    chessboardAfterMove: z.string().optional(),
    from: z.string().optional(),
    to: z.string().optional(),
  })
);

export type ChessGameMoveMadeEvent = z.infer<
  typeof ChessGameMoveMadeEventSchema
>;

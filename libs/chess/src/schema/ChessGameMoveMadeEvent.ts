import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const ChessGameMoveMadeEventSchema = withTypeBlueId(
  blueIds['Chess Game Move Made Event']
)(
  z.object({
    name: z.string().optional(),
    playerMakingMove: z.string().optional(),
    winner: z.string().optional(),
    chessboardAfterMove: z.string().optional(),
    from: z.string().optional(),
    to: z.string().optional(),
    draw: blueNodeField().optional(),
    gameOver: blueNodeField().optional(),
  })
);

export type ChessGameMoveMadeEvent = z.infer<
  typeof ChessGameMoveMadeEventSchema
>;

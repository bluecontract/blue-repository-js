import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const ChessMoveSchema = withTypeBlueId(blueIds['Chess Move'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    from: z.string().optional(),
    to: z.string().optional(),
  })
);

export type ChessMove = z.infer<typeof ChessMoveSchema>;

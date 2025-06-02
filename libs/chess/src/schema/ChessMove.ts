import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const ChessMoveSchema = withTypeBlueId(blueIds.ChessMove)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    from: z.string().optional(),
    to: z.string().optional(),
  })
);

export type ChessMove = z.infer<typeof ChessMoveSchema>;

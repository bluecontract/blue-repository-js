import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const StockfishResponseSchema = withTypeBlueId(
  blueIds.StockfishResponse
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    move: z.string().optional(),
    eval: z.number().optional(),
    depth: z.number().optional(),
    winChance: z.number().optional(),
    from: z.string().optional(),
    text: z.string().optional(),
    to: z.string().optional(),
    fen: z.string().optional(),
  })
);

export type StockfishResponse = z.infer<typeof StockfishResponseSchema>;

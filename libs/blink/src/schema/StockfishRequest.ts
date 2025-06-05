import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const StockfishRequestSchema = withTypeBlueId(
  blueIds['Stockfish Request']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    fen: z.string().optional(),
    depth: z.number().optional(),
  })
);

export type StockfishRequest = z.infer<typeof StockfishRequestSchema>;

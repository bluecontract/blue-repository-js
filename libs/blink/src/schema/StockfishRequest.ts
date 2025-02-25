import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const StockfishRequestSchema = withTypeBlueId(blueIds.StockfishRequest)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    fen: z.string().optional(),
    depth: z.number().optional(),
  })
);

export type StockfishRequest = z.infer<typeof StockfishRequestSchema>;

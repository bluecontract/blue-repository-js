import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const FundsCapturedSchema = withTypeBlueId(
  blueIds['PayNote/Funds Captured']
)(
  ResponseSchema.extend({
    amountCaptured: z.number().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type FundsCaptured = z.infer<typeof FundsCapturedSchema>;

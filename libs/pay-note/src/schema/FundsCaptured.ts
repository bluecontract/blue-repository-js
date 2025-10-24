import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const FundsCapturedSchema = withTypeBlueId(blueIds['Funds Captured'])(
  ResponseSchema.extend({
    amountCaptured: z.unknown().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type FundsCaptured = z.infer<typeof FundsCapturedSchema>;

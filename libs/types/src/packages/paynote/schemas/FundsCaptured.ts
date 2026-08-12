import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const FundsCapturedSchema: any = withTypeBlueId(
  blueIds['PayNote/Funds Captured']
)(
  ResponseSchema.extend({
    amountCaptured: zod.number().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type FundsCaptured = z.infer<typeof FundsCapturedSchema>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const SettlementAmountRejectedSchema: any = withTypeBlueId(
  blueIds['PayNote/Settlement Amount Rejected']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type SettlementAmountRejected = z.infer<
  typeof SettlementAmountRejectedSchema
>;

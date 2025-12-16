import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const SettlementAmountRejectedSchema = withTypeBlueId(blueIds['PayNote/Settlement Amount Rejected'])(
  ResponseSchema.extend({
    "reason": z.string().optional()
  })
);

export type SettlementAmountRejected = z.infer<typeof SettlementAmountRejectedSchema>;

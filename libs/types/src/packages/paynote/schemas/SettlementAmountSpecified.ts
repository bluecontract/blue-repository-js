import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const SettlementAmountSpecifiedSchema = withTypeBlueId(blueIds['PayNote/Settlement Amount Specified'])(
  ResponseSchema.extend({
    "finalAmount": z.number().int().optional()
  })
);

export type SettlementAmountSpecified = z.infer<typeof SettlementAmountSpecifiedSchema>;

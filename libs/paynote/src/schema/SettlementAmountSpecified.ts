import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/conversation';

export const SettlementAmountSpecifiedSchema = withTypeBlueId(
  blueIds['Settlement Amount Specified']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    finalAmount: z.number().optional(),
    name: z.string().optional(),
  })
);

export type SettlementAmountSpecified = z.infer<
  typeof SettlementAmountSpecifiedSchema
>;

import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const SettlementAmountSpecifiedSchema = withTypeBlueId(
  blueIds['Settlement Amount Specified']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    finalAmount: z.unknown().optional(),
    name: z.string().optional(),
  })
);

export type SettlementAmountSpecified = z.infer<
  typeof SettlementAmountSpecifiedSchema
>;
